import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client/core";

const httpLink = createHttpLink({
  uri: process.env.VUE_APP_USER_API_URI,
  headers: {
    authorization: sessionStorage.getItem("ACCESS_TOKEN"),
  },
});

const cache = new InMemoryCache();

export const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
});
