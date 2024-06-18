import UserModel from "../Models/User.js"

export const deleteUser = async(req, res) =>{
    try{
        await UserModel.findOneAndDelete({userId: req.body.userId})
        res.json('Deleted Successfully')
    }catch(error){
        console.log(error.message)
    }
}