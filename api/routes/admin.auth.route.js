import express from 'express';
import {signup,signin,google,signout} from '../Controllers/auth.controller.js'
import { signIn } from '../Controllers/admin.auth.controller.js';
const router = express.Router();



router.post('/signin',signIn)


export default router;