import { ApolloClient, InMemoryCache } from '@apollo/client';
import config from "../services/config"
const cache = new InMemoryCache()

const client = new ApolloClient({
  uri: config.REACT_APP_APOLLO_CLIENT_URI,
  cache
});

export default client