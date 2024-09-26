import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { schema } from './graphql/schema/schema.js';

const server = new ApolloServer({
    typeDefs: schema,
    resolvers: {
        Query: {
            hello: () => 'Hello, World!',
        },
    },
});

const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
});

console.log(`🚀  Server ready at ${url}`);
