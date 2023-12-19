import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import axios from "axios";

// GraphQL schema
const typeDefs = `#graphql
    type Query {
        categories: [String]
        randomJoke(category: String): String
    }
`;

// resolvers
const resolvers = {
    Query: {
        categories: async () => {
            try {
                const response = await axios.get(
                    "https://api.chucknorris.io/jokes/categories"
                );
                return response.data;
            } catch (error) {
                throw new Error(error);
            }
        },
        randomJoke: async (_, args) => {
            try {
                const response = await axios.get(
                    `https://api.chucknorris.io/jokes/random?category=${args.category}`
                );
                return response.data.value;
            } catch (error) {
                throw new Error(error);
            }
        },
    },
};

// server setup
const server = new ApolloServer({
    typeDefs,
    resolvers,
});

const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
});

console.log("Server ready at port", 4000);
