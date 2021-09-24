import { GraphQLServer } from 'graphql-yoga';
import { typeDefs } from './typedefs/typedefs';
import { resolvers } from './resolvers/resolvers';

import './database/database';

const server = new GraphQLServer({
    typeDefs,
    resolvers
})

server.start(() => {
    console.log("Server is running")
})