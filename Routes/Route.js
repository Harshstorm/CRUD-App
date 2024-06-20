import express from "express";
import { saveUser } from "../Controllers/SaveUser.js";
import { getUsers } from "../Controllers/GetUsers.js";
import { updateUser } from "../Controllers/UpdateUser.js";
import { deleteUser } from "../Controllers/DeleteUser.js";
import { deleteAll } from "../Controllers/DeleteAll.js";

const router = express()

router.post('/saveUser', saveUser)
router.get('/getusers', getUsers )
router.post('/updateuser', updateUser )
router.post('/deleteuser', deleteUser )
router.post('/deleteall', deleteAll )

export default router;