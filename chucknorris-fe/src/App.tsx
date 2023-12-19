import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Categories from "./components/getAllJokes";

// Set up Apollo Client
const client = new ApolloClient({
    uri: "http://localhost:4000",
    cache: new InMemoryCache(),
});

function App() {
    return (
        <ApolloProvider client={client}>
            <Categories />
        </ApolloProvider>
    );
}

export default App;
