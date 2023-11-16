// package.json에서 type을 module로 설정하는 경우 ↓
import { ApolloServer, gql } from "apollo-server";
// package.json에서 type을 module로 설정하지 않는 경우 ↓
// const { ApolloServer, gql } = require("apollo-server");

// Error: Apollo Server requires either an existing schema, modules or typeDefs
// 사용자가 request할 모든 data들은 type Query안에 있어야 한다
// allPosts = field
const typeDefs = gql`
    type User {
        id: ID
        username: String
    }
    type Post {
        id: ID!
        text: String!
        author: User
    }
    # Query = REST api의 GET request
    # Mutation = REST api의 POST, PUT, DELETE request
    type Query {
        allPosts: [Post!]!
        post(id: ID!): Post
        ping: String
    }
    # ! = required(non-nullable)
    # allPosts: [Post!]! = ① allPosts는 무조건 하나이상의 list를 주며([]!) ② 그 list는 항상 Post로 이루어져 있다(Post!)
    # post(id: ID): Post = nullable field
    # post(id: ID!): Post! = id(argument) 필수이며 항상 Post를 return해야한다
    type Mutation {
        createPost(userId: ID!, text: String!): Post!
        deletePost(id: ID!): Boolean!
    }
`;

let posts = [
    {
        id: "1",
        text: "first",
    },
    {
        id: "2",
        text: "second",
    },
    {
        id: "3",
        text: "third",
    },
];

// Server가 resolvers 함수를 부를때는 항상 arguments(① root, ② args: query/mutation에서 유저가 보낸 매개변수)를 전달한다
const resolvers = {
    Query: {
        allPosts() {
            return posts;
        },
        post(_, { id }) {
            return posts.find((item) => item.id === id);
        },
        ping() {
            return "pong";
        },
    },
    Mutation: {
        createPost(_, { userId, text }) {
            const newPost = { id: posts.length + 1, text };
            posts.push(newPost);
            return newPost;
        },
        deletePost(_, { id }) {
            const post = posts.find((item) => item.id === id);
            if (post) {
                posts = posts.filter((item) => item.id !== id);
                return true;
            }
            return false;
            // const post = posts.find((post) => post.id === id);
            // if (!post) return false;
            // posts = posts.filter((post) => post.id !== id);
            // return true;
        },
    },
};
const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then(({ url }) => {
    console.log(`Running on ${url}`);
});
