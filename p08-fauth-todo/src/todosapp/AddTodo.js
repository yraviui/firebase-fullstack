import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import StatusBtnGroup from './StatusBtnGroup'
import axios from 'axios'

const AddTodo = ({ getAllTodos, isAddEditTodo, setIsAddEditTodo, id, setEditTotoId }) => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [status, setStatus] = useState('To Do')
    const handleAddTodo = async (e) => {
        // debugger
        e.preventDefault();
        try {
            if (id !== undefined && id !== "") {
                // console.log('Update Todo')
                const addTodoData = { title, description, status }
                const { data } = await axios.put(`${process.env.REACT_APP_API}/api/v1/todo/${id}`, addTodoData)
                if (data?.success) {
                    toast.success(data?.message);
                    getAllTodos();
                    setIsAddEditTodo(true)
                    setEditTotoId('')
                } else {
                    toast.error(data.message);
                }
            } else {
                // console.log('Add Todo')
                const addTodoData = { title, description, status }
                const { data } = await axios.post(`${process.env.REACT_APP_API}/api/v1/todo`, addTodoData)
                if (data?.success) {
                    toast.success(data?.message);
                    getAllTodos();
                } else {
                    toast.error(data.message);
                }
            }
            setTitle(''); setDescription(''); setStatus('To Do')
        } catch (error) {
            console.log(error)
        }
    }
    const editHandler = async (id) => {
        try {
            const { data } = await axios.get(`${process.env.REACT_APP_API}/api/v1/todo/${id}`)
            const currentRecord = data.todo
            setTitle(currentRecord.title);
            setDescription(currentRecord.description);
            setStatus(currentRecord.status);
        } catch (err) {
            console.log(err.message)
        }
    }
    useEffect(() => {
        if (id !== undefined && id !== "") {
            editHandler(id)
        }
    }, [id])
    return (
        <div className='w-full my-4 p-2'>
            <div className="bg-white p-2 rounded shadow-md w-full sm:w-96 m-auto">
                <h2 className="text-2xl font-semibold mb-2 text-center">{isAddEditTodo ? 'Add Todo' : 'Update Todo'}</h2>
                <form onSubmit={handleAddTodo}>
                    <div className="flex mb-2 gap-2">
                        <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" name="title" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="Enter title" />
                        <input value={description} onChange={(e) => setDescription(e.target.value)} type="text" name="description" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="Enter description" />
                    </div>
                    <div className="flex mb-2">
                        <StatusBtnGroup status={status} setStatus={setStatus} />
                    </div>
                    <div className="flex justify-end w-100">
                        <button type='submit' className='shadow-md p-2 bg-blue-800 text-white w-full'>{isAddEditTodo ? 'Add Todo' : 'Update Todo'}</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddTodo