import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://192.168.1.9:4000/graphql',
  cache: new InMemoryCache(),
});

export default client;
