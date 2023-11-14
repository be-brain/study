// package.json에서 type을 module로 설정하는 경우 ↓
import { ApolloServer, gql } from "apollo-server";

// package.json에서 type을 module로 설정하지 않는 경우 ↓
// const { ApolloServer, gql } = require("apollo-server");

// Error: Apollo Server requires either an existing schema, modules or typeDefs
// 사용자가 request할 모든 data들은 type Query안에 있어야 한다
// Query = REST api의 GET request
const typeDefs = gql`
    type User {
        id: ID
        username: String
    }
    type Post {
        id: ID
        text: String
        author: User
    }
    type Query {
        allPosts: [Post]
        post(id: ID): Post
    }
`;
// allPosts = field

const server = new ApolloServer({ typeDefs });
server.listen().then(({ url }) => {
    console.log(`Running on ${url}`);
});
