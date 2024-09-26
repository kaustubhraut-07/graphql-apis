import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { schema } from './graphql/schema/schema.js';
import {dbConnect} from './config/dbconnection.js';
import {User} from './Models/User.js';
import { getAllUsers } from './controllers/user.controllers.js';
import { getAllTasks } from './controllers/tasks.controllers.js';

dbConnect();
const server = new ApolloServer({
    typeDefs: schema,
    resolvers: {
        Query: {
            hello: () => 'Hello, World!',
            users : getAllUsers,
            tasks : getAllTasks
        },
    },
});

const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
});

console.log(`🚀  Server ready at ${url}`);
