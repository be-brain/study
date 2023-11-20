// package.json에서 type을 module로 설정하는 경우 ↓
import { ApolloServer, gql } from "apollo-server";
import { API_KEY } from "./config/apikey.js";
// package.json에서 type을 module로 설정하지 않는 경우 ↓
// const { ApolloServer, gql } = require("apollo-server");

// Error: Apollo Server requires either an existing schema, modules or typeDefs
// 사용자가 request할 모든 data들은 type Query안에 있어야 한다
// allPosts = field
const typeDefs = gql`
    type User {
        id: ID
        intro: String
        firstName: String
        lastName: String
        """
        The combination of firstName and lastName.
        """
        fullName: String
    }
    """
    Post object represents a resource for a post. It consists of three properties(id, text, author).
    """
    type Post {
        id: ID!
        text: String!
        author(id: ID): User
    }
    type MovieDetails {
        adult: Boolean
        backdrop_path: String
        genre_ids: [Int]
        id: ID
        original_language: String
        original_title: String
        overview: String
        popularity: Float
        poster_path: String
        release_date: String
        title: String
        video: Boolean
        vote_average: Float
        vote_count: Int
    }
    # Query = REST api의 GET request
    # Mutation = REST api의 POST, PUT, DELETE request
    type Query {
        allMovies: [MovieDetails!]!
        allUsers: [User!]!
        allPosts: [Post!]!
        movie(id: ID!): MovieDetails
        post(id: ID!): Post
        ping: String
    }
    # ! = required(non-nullable)
    # allPosts: [Post!]! = ① allPosts는 무조건 하나이상의 list를 주며([]!) ② 그 list는 항상 Post로 이루어져 있다(Post!)
    # post(id: ID): Post = nullable field
    # post(id: ID!): Post! = id(argument) 필수이며 항상 Post를 return해야한다
    type Mutation {
        """
        It takes two parameters: userId and text
        """
        createPost(userId: ID!, text: String!): Post!
        deletePost(id: ID!): Boolean!
    }
`;

let posts = [
    {
        id: "1",
        text: "first",
        userId: "20",
    },
    {
        id: "2",
        text: "second",
        userId: "30",
    },
    {
        id: "3",
        text: "third",
        userId: "30",
    },
];
let users = [
    { id: "10", firstName: "Bella", lastName: "Howard" },
    { id: "20", firstName: "Json", lastName: "Wood" },
    { id: "30", firstName: "Ele", lastName: "Page" },
];

// Server가 resolvers 함수를 부를때는 항상 arguments(① root, ② args: query/mutation에서 유저가 보낸 매개변수)를 전달한다
const resolvers = {
    Query: {
        allMovies() {
            return fetch(
                `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
            )
                .then((res) => res.json())
                .then((data) => data.results);
        },
        allUsers() {
            console.log("allUsers called");
            return users;
        },
        allPosts() {
            return posts;
        },
        movie(_, { id }) {
            return fetch(
                `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
            ).then((res) => res.json());
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
            const isUser = users.find((user) => user.id === userId);
            if (!isUser) return "No permission";
            const newPost = { id: posts.length + 1, userId, text };
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
    User: {
        intro(root) {
            console.log("User called");
            console.log(root);
            return "Hello!";
        },
        fullName({ firstName, lastName }) {
            return `${firstName} ${lastName}`;
        },
    },
    Post: {
        author({ userId }, { id }) {
            const isUser = users.find((user) => user.id === id);
            if (!isUser) console.log("Not User");
            return users.find((user) => user.id === userId);
        },
    },
};
const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then(({ url }) => {
    console.log(`Running on ${url}`);
});
