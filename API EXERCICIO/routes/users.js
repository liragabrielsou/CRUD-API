import express from "express"

import { getUsers } from "../controlers/userController.js"
import { postUsers } from "../controlers/userController.js"

import { getTask } from "../controlers/taskController.js"
import { postTask } from "../controlers/taskController.js"
import { updateTask } from "../controlers/taskController.js"
import { deleteTask } from "../controlers/taskController.js"

const router = express.Router()

//ROTAS PARA USERS
router.get("/users",getUsers)
router.post("/users",postUsers)

//ROTAS PARA TASKS
router.get("/tasks",getTask)
router.post("/tasks",postTask)
router.put("/tasks/:id",updateTask)
router.delete("/tasks/:id",deleteTask)

export default router