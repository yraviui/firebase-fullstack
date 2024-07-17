import TodoModel from "../models/todo.js"

// add Todo Items by post method
export const createTodoController = async (req, res) => {
    try {
        const { title, description, status } = req.body
        if (!title) { return res.send({ message: 'title is required' }) }

        // save
        const todo = await new TodoModel({ title, description, status }).save()
        res.status(200).send({
            success: true,
            message: 'Todo added Successfully.',
            todo
        })

    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: 'Error in create Todo',
            error
        })
    }
}

// get all Todos Items by get method
export const getAllTodosController = async (req, res) => {
    try {
        const todo = await TodoModel.find({})
        res.status(200).send({
            success: true,
            message: 'All Todo List',
            todo
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            error,
            message: 'Error while getting all todo'
        })
    }
}

// get single Todo Item by get method
export const getTodoController = async (req, res) => {
    try {
        const id = req.params.id
        const todo = await TodoModel.findById({ _id: id })
        res.status(200).send({
            success: true,
            message: `${id}, 'Get Single Todo successfully!'`,
            todo
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            error,
            message: 'Error while getting single todo!'
        })
    }
}

// delete Todo Controller
export const deleteTodoController = async (req, res) => {
    try {
        const id = req.params.id
        await TodoModel.findByIdAndDelete({ _id: id })
        res.status(200).send({
            success: true,
            message: 'Todo deleted successfully'
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            error,
            message: 'Error while deleting todo'
        })
    }
}

// update Todo
export const updateTodoController = async (req, res) => {
    try {
        const { title, description, status } = req.body
        if (!title) { return res.send({ message: 'title is required' }) }
        const id = req.params.id
        const todo = await TodoModel.findByIdAndUpdate(
            { _id: id }, { title, description, status }, { new: true }
        )
        res.status(200).send({
            success: true,
            message: 'Todo updated successfully',
            todo
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            error,
            message: 'Error while updating todo'
        })
    }
}