import express from 'express'
const router = express.Router()
import {test} from '../Controllers/user.controller.js'

router.get('/',test)


export default router;