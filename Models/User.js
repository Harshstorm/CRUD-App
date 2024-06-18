import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name:{
        type: String
    },
    lastname:{
        type: String
    },
    role:{
        type: String
    },
    age:{
        type: Number
    },
    phone:{
        type: Number
    },
    userId:{
        type: Number
    }
},{timestamps: true})

const UserModel = new mongoose.model('Users', UserSchema)

export default UserModel;
