import {Task} from "../Models/Tasks.js";
export const getAllTasks = async()=>{
    const tasks = await Task.find();
    return tasks
}

export const getTaskById = async (parent, args) => {
    // console.log(args, "args");
    const task = await Task.findById(args.id); 
    return task;
}

export const getTaskofUser = async(parent, args)=>{

    const tasks = await Task.find({user: args.id});
    return tasks
}

export const createTask = async (parent, args) => {
    console.log(args);
    const newTask = new Task(args);
    return newTask.save();
}