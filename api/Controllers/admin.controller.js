import mongoose from "mongoose";
import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs'
import { errHandler } from "../utils/error.js";

export const getAllUsers = async (req, res) => {
  try {
    const allUsers = await User.find().select('-password');
    return res.status(200).json(allUsers);
    
  } catch (error) {
    console.log(error.message);
  }
};



export const updateUser = async (req,res,next)=>{


  try {
    if(req.body.password){
      req.body.password = bcryptjs.hashSync(req.body.password,10)
    }
    const updatedUser = await User.findByIdAndUpdate(req.params.id,{
      $set:{
        username:req.body.username,
        email:req.body.email,
        password:req.body.password,
        profilePicture:req.body.profilePicture
      }
    },
    {new:true})
   const {password,...rest} = updatedUser._doc;
   return res.status(200).json(rest);
    
  } catch (error) {
    next(error)
  }
    
}