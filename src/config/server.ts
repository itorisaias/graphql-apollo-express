import { createServer } from 'http';
import { ApolloServer } from 'apollo-server-express';
import depthLimit from 'graphql-depth-limit';

import app from './app';
import schema from './../graphql';

const server = new ApolloServer({
  schema,
  validationRules: [
    depthLimit(7),
  ],
});

server.applyMiddleware({ app, path: '/graphql' })

const httpServer = createServer(app);

export default httpServer;
