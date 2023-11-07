import express from 'express';
import { signIn ,signOut} from '../Controllers/admin.auth.controller.js';
const router = express.Router();



router.post('/signin',signIn)
router.get('/signout',signOut)


export default router;