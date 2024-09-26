import {Task} from "../Models/Tasks.js";
export const getAllTasks = async()=>{
    const tasks = await Task.find();
    return tasks
}