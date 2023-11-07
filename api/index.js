import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import userRoutes from './routes/user.route.js'
import authRoute from './routes/auth.route.js'
import adminRoute from './routes/admin.route.js'
import path  from 'path';
import adminAuthRoute from './routes/admin.auth.route.js'
dotenv.config();
const app = express()
const __dirname = path.resolve()

mongoose.connect(process.env.MONGO).then(()=>{
  console.log('Connected To Database successfully');
}).catch((err)=>{
console.log(err.message);
})
app.use(express.static(path.join(__dirname,'/client/dist')))

app.use(cookieParser())
app.use(express.json())
app.use('/api/user',userRoutes)
app.use('/api/auth',authRoute)
app.use('/api/admin',adminRoute)
app.use('/api/auth/admin',adminAuthRoute)
app.get('*',(req,res)=>{
  res.sendFile(path.join(__dirname,'client','dist','index.html'))
})

app.use((err,req,res,next)=>{
    const statusCode = err.statusCode || 500
    const message = err.message || 'Internal Server Error'
    return res.status(statusCode).json({
      success:false,
      message,
      statusCode
    })
})


app.listen(3000,()=>{
  console.log('Server listening on port 3000');
})