import axios from "axios"

// get all Categories
export const getAllTodos = async () => await axios.get(`${process.env.REACT_APP_API}/api/v1/todo`)