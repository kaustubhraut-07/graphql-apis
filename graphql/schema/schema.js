export const schema = `#graphql

type User{
    _id: String!,
    name: String!,
    email: String!,
    password: String!,
    avatar: String!,
    createdAt: String!,
    updatedAt: String!
    role: String!



}

type Tasks{
    name:  String!,
    description:  String!,    
    completed: Boolean!,
    user: String!,
    date: String!,
    createdAt: String!,
    updatedAt: String!
    
}

type Query {
    hello: String,
    users:[User],
    tasks:[Tasks]
    task(id : ID!): Tasks ,
    usertasks(id : ID!): [Tasks]
    
}

`