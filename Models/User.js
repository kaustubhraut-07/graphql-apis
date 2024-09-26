import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: String
    },
    
    date: {
        type: Date,
        default: Date.now
    }
},
{
    timestamps: true
});

export const User = mongoose.model("users", UserSchema)