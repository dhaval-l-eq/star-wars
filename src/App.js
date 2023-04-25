import "./App.css";
import MoviesList from "./components/MoviesList";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

function App() {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "https://swapi-graphql.netlify.app/.netlify/functions/index",
  });

  return (
    <ApolloProvider client={client}>
      <main>
        <MoviesList />
      </main>
    </ApolloProvider>
  );
}

export default App;
