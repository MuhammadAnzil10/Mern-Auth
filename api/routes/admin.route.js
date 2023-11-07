import express from 'express'
const router = express.Router()
import {test,updateUser,deleteUser} from '../Controllers/user.controller.js'
import {verifyToken} from '../utils/verifyUser.js'
import { getAllUsers } from '../Controllers/admin.controller.js'

router.get('/users',getAllUsers)



export default router;






