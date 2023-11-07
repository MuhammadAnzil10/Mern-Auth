import mongoose from "mongoose";
import User from "../models/user.model.js";

export const getAllUsers = async (req, res) => {
  try {
    const allUsers = await User.find().select('-password');
    return res.status(200).json(allUsers);
    
  } catch (error) {
    console.log(error.message);
  }
};
