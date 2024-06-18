import UserModel from "../Models/User.js";

export const deleteAll = async(req, res) =>{
    try{
        await UserModel.deleteMany({})
        res.json('Deleted Successfully')
    }catch(error){
        console.log(error.message)
    }
}