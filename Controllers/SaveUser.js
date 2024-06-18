
import UserModel from "../Models/User.js"

export const saveUser = async(req, res)=>{
    try{
        const user = new UserModel(req.body)
       await user.save();
       res.json('Saved Successfully')
    }catch(error){
        console.log(error.message)
    }
}