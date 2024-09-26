import { User } from "../Models/User.js";

export const getAllUsers =async()=>{
    const users = await User.find();
    return users
}

export const createUser = async (parent, args) => {
    const newUser = new User(args);
    return newUser.save();  
    
}