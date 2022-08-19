import { ApolloClient, InMemoryCache } from "@apollo/client";
const client = new ApolloClient({
  uri: "https://swapi-graphql.netlify.app/.netlify/functions/index",
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          feed: {
              merge(existing = [], incoming) {
              return [...existing, ...incoming];
            },
          },
        },
      },
    },
  }),
});

export default client;
