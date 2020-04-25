import { ApolloServer } from 'apollo-server';

// GraphQL type definitions and resolvers from schema.
import schema from './schema';

// Data sources used by resolvers.
// Can be a REST API, database, or any other compatible data source.
import dataSources from './dataSources';

// Initialize database connection.
import './connector';

import { PORT } from './config/env';

// Setup logger. Ideally a production logger config should be done
// in a separate package to allow reuse across projects.
const logger = require('pino')();

const jwt = require("jsonwebtoken");

const getUser = token => {
  try {
    if (token) {
      return jwt.verify(token, 'tajniKljuc123')
    }
    return null
  } catch (err) {
    return null
  }
}

// Initialize ApolloServer.
// Base server is used here but there are other options
// that are perhaps more suitable for production apps
// (e.g. https://github.com/apollographql/apollo-server/tree/master/packages/apollo-server-express)
const server = new ApolloServer({
  schema,

  dataSources,

  context: ({ req }) => {
    // GraphQL Playground fires introspection queries that
    // pollute the logs. Introspection queries are ignored here
    // for dev purposes.
    if (!req.body.query.includes('IntrospectionQuery'))
      logger.info({
        query: req.body.query,
        variables: req.body.variables,
      });

    const tokenWithBearer = req.headers.authorization || '';
    const token = tokenWithBearer.split(' ')[1];
    const user = getUser(token);


    return {
      user
    };

  },

  formatResponse: response => {
    const name = Object.keys(response.data || { unknown: 0 })[0];
    if (!['__schema'].includes(name)) {
      console.log(`[GraphQL.response] ${name}()`, JSON.stringify(response));
    }
    return response;
  },

  // Errors are logged before being forwarded to service caller.
  // Other actions such as notifying monitoring/alert services can go here.
  formatError: err => {
    logger.error(err);
    return err;
  },
});

// In development mode, GraphQL Playground is exposed at
// http:url:port/graphql (e.g. http://localhost:5000/graphql)
server.listen({ port: PORT || 5000 }).then(({ url }) => {
  logger.info(`🚀  Server ready at ${url}`);
});
