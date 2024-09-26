import mongoose from "mongoose";
export const dbConnect = async () => {
    try{
        console.log(process.env.MONGO_URI);
        await mongoose.connect(process.env.MONGO_URI);

        console.log("MongoDB connected");
    }catch(error){
        console.log(error.message);

    }
   
};

// module.exports = dbConnect;