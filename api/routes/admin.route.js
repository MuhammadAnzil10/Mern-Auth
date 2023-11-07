import express from 'express'
const router = express.Router()
import {updateUser} from '../Controllers/admin.controller.js'
import {verifyToken} from '../utils/verifyAdmin.js'
import { getAllUsers } from '../Controllers/admin.controller.js'

router.get('/users',getAllUsers)
router.post('/update/:id',verifyToken,updateUser)



export default router;






