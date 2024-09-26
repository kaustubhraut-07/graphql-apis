import { User } from "../Models/User.js";

export const getAllUsers =async()=>{
    const users = await User.find();
    return users
}