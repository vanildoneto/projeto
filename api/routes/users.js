import express from "express"
import { getUsers, addUsers, updateUsers, deleteUsers } from '../controllers/user.js'

const router = express.Router()

router.get('/', getUsers)

router.post('/', addUsers)

router.put('/:id', updateUsers)

router.delete('/:id', deleteUsers)



export default router 