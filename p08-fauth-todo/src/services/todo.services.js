import axios from "axios"
import toast from "react-hot-toast"

// get all Categories
export const getAllTodos = async () => {
    try {
        const { data } = await axios.get(`${process.env.REACT_APP_API}/api/v1/todo`)
        if (data?.success) {
            toast.success(data.message);
            console.log('data.todo: ', data.todo)
            return data.todo
        } else {
            toast.error(data.message);
        }
    } catch (error) {
        console.log(error)
        toast.error('Somthing went wrong for getting all Todo service')
    }
}

// get single Categories
export const getTodo = async id => {
    try {
        const { data } = await axios.get(`${process.env.REACT_APP_API}/api/v1/todo/${id}`)
        console.log('data from getTodo service: ', data)
    } catch (error) {
        console.log(error)
    }
}
export const deleteTodo = async id => {
    try {
        const { data } = await axios.delete(`${process.env.REACT_APP_API}/api/v1/todo/${id}`)
        console.log('data from getTodo service: ', data)
        toast.success(data.message)
    } catch (error) {
        console.log(error)
        toast.success(error.message)
    }
}