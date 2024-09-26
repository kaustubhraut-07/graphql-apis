import mongoose from "mongoose";


const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "users",
        required : true
    },
    date: {
        type: Date,
        default: Date.now
    }
},{
    timestamps: true
});

// module.exports =mongoose.model("tasks", TaskSchema) ;
export const Task = mongoose.model("tasks", TaskSchema) ;