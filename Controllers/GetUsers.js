import UserModel from "../Models/User.js";

export const getUsers = async(req, res) =>{
    try{
        const data = await UserModel.find({})
        res.json(data)
    }catch(error){
        console.log(error.message)
    }
}