import { useEffect, useState } from "react";
import axios from "axios";

export default function useTodos() {
    const [todos, setTodos] = useState([])

    // get todos
    const getTodos = async () => {
        try {
            const { data } = await axios.get(`${process.env.REACT_APP_API}/api/v1/todo`)
            setTodos(data?.todo)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getTodos()
    }, [])
    return todos
}