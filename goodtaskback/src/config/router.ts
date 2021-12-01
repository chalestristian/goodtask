import express from "express";
import TaskController from "../api/controller/taskController";

const tasks = new TaskController
const router = express.Router()

router.get('/tasks', tasks.GetTasks)
router.get('/tasks/all', tasks.GetAllTasks)
router.get('/tasks/:id', tasks.GetTasks)

router.post('/tasks', tasks.AddTask)
router.put('/tasks/update/:id', tasks.UpdateTask)
router.put('/tasks/disable/:id', tasks.DeactiveTask)
router.delete('/tasks/delete/:id', tasks.DeleteTask)

export default router