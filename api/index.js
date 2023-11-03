import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config();
const app = express()
console.log(process.env.MONGO);

mongoose.connect(process.env.MONGO).then(()=>{
  console.log('Connected To Database successfully');
}).catch((err)=>{
console.log(err.message);
})

app.listen(3000,()=>{
  console.log('Server listening on port 3000');
})