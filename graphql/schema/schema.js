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

type Query {
    hello: String,
    users:[User]
    
}

`