import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js'
dotenv.config();
const app = express()


mongoose.connect(process.env.MONGO).then(()=>{
  console.log('Connected To Database successfully');
}).catch((err)=>{
console.log(err.message);
})

app.use('/',userRoutes)




app.listen(3000,()=>{
  console.log('Server listening on port 3000');
})