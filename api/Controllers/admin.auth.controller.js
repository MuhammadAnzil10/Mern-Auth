import User from "../models/user.model.js";
import Admin from "../models/admin.model.js";
import bcryptjs from "bcryptjs";
import { errHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const signIn = async (req, res, next) => {
  try {

    const { email, password } = req.body;

    const adminData = await Admin.findOne({ email });
    if (!adminData) {
      return next(errHandler(404, "User not found"));
    }

    const validPassword = bcryptjs.compareSync(password, adminData.password);

    if (!validPassword) {
      return next(errHandler(401, "Wrong credentials"));
    }

    const adminToken = jwt.sign(
      { id: adminData._id },
      process.env.ADMIN_JWT_SECRET
    );
    const { password: hashedPassword, ...rest } = adminData._doc;
    const expiryDate = new Date(Date.now() + 3600000); //
    res
      .cookie("admin_access_token", adminToken, { httpOnly: true, expires: expiryDate })
      .status(200)
      .json(rest);
  } catch (error) {
    next(error)
  }
};



export const signOut =async (req,res,next)=>{

  return res.clearCookie('admin_access_token').status(200).json('Signout success!');
}

