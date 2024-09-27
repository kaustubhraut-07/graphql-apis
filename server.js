import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { schema } from './graphql/schema/schema.js';
import {dbConnect} from './config/dbconnection.js';
import {User} from './Models/User.js';
import { getAllUsers } from './controllers/user.controllers.js';
import { getAllTasks } from './controllers/tasks.controllers.js';
import { getTaskById } from './controllers/tasks.controllers.js';
import { createUser } from './controllers/user.controllers.js';
import { createTask } from './controllers/tasks.controllers.js';
import dotenv from 'dotenv';
dotenv.config();
dbConnect();
const server = new ApolloServer({
    typeDefs: schema,
    resolvers: {
        Query: {
            hello: () => 'Hello, World!',
            users : getAllUsers,
            tasks : getAllTasks,
            task: (parent, args) => getTaskById(parent, args),
            usertasks : (parent, args) => getTaskofUser(parent, args),

        },
        Mutation:{
            createUser: (parent , args)=> createUser(parent , args),
            createTask : (parent , args)=> createTask(parent , args),
        }
    },
});

const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
});

console.log(`🚀  Server ready at ${url}`);
