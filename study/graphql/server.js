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
        author: User!
    }
    # Query = REST api의 GET request
    # Mutation = REST api의 POST, PUT, DELETE request
    type Query {
        allPosts: [Post!]!
        post(id: ID!): Post
    }
    # ! = required(non-nullable)
    # allPosts: [Post!]! = ① allPosts는 무조건 하나이상의 list를 주며([]!) ② 그 list는 항상 Post로 이루어져 있다(Post!)
    # post(id: ID): Post = nullable field
    # post(id: ID!): Post! = id(argument) 필수이며 항상 Post를 return해야한다
    type Mutation {
        createPost(text: String!, userId: ID!): Post!
        deletePost(id: ID!): Boolean!
    }
`;

const server = new ApolloServer({ typeDefs });
server.listen().then(({ url }) => {
    console.log(`Running on ${url}`);
});
