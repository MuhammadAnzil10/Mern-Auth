import User from '../models/user.model.js'
import bcryptjs from 'bcryptjs'

export const signup = async (req,res,next)=>{

const {name,email,password} = req.body;

const hashedPassword = bcryptjs.hashSync(password,10)
const newUser = new User({
   username:name,
    email,
    password:hashedPassword
})

try{
  await newUser.save()
   return  res.status(201).json({message:"User created successfully"})
      
}catch(err){
  next(err)
}
   
}