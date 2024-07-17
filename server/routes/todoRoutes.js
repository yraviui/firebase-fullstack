import express from 'express'
import { createTodoController, deleteTodoController, getAllTodosController, getTodoController, updateTodoController } from '../controllers/todoController.js'

const router = express.Router()

// routes
// Create Todo
router.post('/todo', createTodoController)
// get all todos
router.get('/todo', getAllTodosController)
// get single todo
router.get('/todo/:id', getTodoController)
// delete single todo
router.delete('/todo/:id', deleteTodoController)
// update todo
router.put('/todo/:id', updateTodoController)

export default router
