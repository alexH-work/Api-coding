import express from 'express';
import { createUser , getUser, editUser, deleteUser } from '../controllers/users.js';

const router = express.Router();

let users = [
    {
        id:1,
        firstName:"John",
        lastName:"Doe",
        age:25
    },
    {
        id:2,
        firstName:"Jane",
        lastName:"Doe",
        age:25
    },
    {
        id:3,
        firstName:"Jack",
        lastName:"Doe",
        age:5
    }
]
//get all users
router.get('/', (req,res)=> {res.send(users)});
//create user
router.post('/',createUser);
// /users/2 => req.params { id: 2 }
router.get('/:id', getUser);
router.delete('/:id', deleteUser);
// patch changes 1 item 
// put overwrite the entire entry
router.patch('/:id', editUser);

export default router;
