import UserModel from "../Models/User.js";

export const updateUser = async(req, res) =>{
    try{
        await UserModel.findOneAndUpdate({userId: req.body.userId}, req.body , {new: true})
        res.json('Updated Successfully')
    }catch(error){
        console.log(error.message)
    }
}