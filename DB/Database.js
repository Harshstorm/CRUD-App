import mongoose from "mongoose";

// const URL = 'mongodb://localhost:27017'

 const Connection = async() =>{
    try{
        await mongoose.connect(process.env.MONGO_URL)
        console.log("Database is connected")
    }catch(error){
        console.log(error.message)
    }
}

export default Connection