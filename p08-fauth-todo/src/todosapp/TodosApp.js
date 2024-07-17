import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import TodoItems from './TodoItems'
import { deleteTodo, getTodo } from '../services/todo.services'
import axios from 'axios'
import toast from 'react-hot-toast'
import AddTodo from './AddTodo'
const filterList = ['All', 'To Do', 'In Progress', 'Done']
const TodosApp = () => {
    const [todos, setTodos] = useState([])
    const [isAddEditTodo, setIsAddEditTodo] = useState(true)
    const [eidtTodoId, setEditTotoId] = useState('')
    const [isSort, setIsSort] = useState(false)
    const [sortTodos, setSortTodos] = useState([])
    const [search, setSearch] = useState('')
    /* ------------- get all todos -------------------------------- */
    const getAllTodos = async () => {
        try {
            const { data } = await axios.get(`${process.env.REACT_APP_API}/api/v1/todo`)
            if (data?.success) {
                // toast.success(data.message);
                setTodos(data.todo)
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            console.log(error)
            toast.error('Somthing went wrong for getting all Todo service')
        }
    }
    /* ------------- update todo ---------------------------- */
    const getUpdateTodoHandler = (id) => {
        setEditTotoId(id)
        setIsAddEditTodo(false)
        getTodo(id)
        setIsSort(false)
    }
    /* ------------- delete todo ---------------------------- */
    const deleteTodoIdHandler = (id) => {
        deleteTodo(id)
        getAllTodos()
        setIsSort(false)
    }
    /* ------------- Sort ---------------------------- */
    const handleSort = () => {
        console.log('Sort')
        const softTodos = todos.sort((a, b) => (a.title).localeCompare(b.title))
        setIsSort(true)
        setSortTodos(softTodos)
    }
    /* ------------- Selec Filter ---------------------------- */
    const handleSelect = (e) => {
        e.preventDefault()
        const filterStatus = e.target.value
        if (filterStatus === 'To Do' || filterStatus === 'In Progress' || filterStatus === 'Done') {
            const filterByStatus = todos.filter(o => o.status.toLowerCase().startsWith(filterStatus.toLowerCase()) && o.status !== filterStatus.toLowerCase())
            setIsSort(true)
            setSortTodos(filterByStatus)
        } else {
            setIsSort(false)
        }
    }
    /* ------------- Search ---------------------------- */
    const handleSearch = (e) => {
        e.preventDefault()
        setSearch(e.target.value)
        const searchResult = todos.filter(o => o.title.toLowerCase().startsWith(search.toLowerCase()) && o.title !== search.toLowerCase())
        setIsSort(true)
        setSortTodos(searchResult)
    }
    useEffect(() => {
        getAllTodos()
    }, [])
    return (
        <div>
            <Header />
            <AddTodo getAllTodos={getAllTodos} isAddEditTodo={isAddEditTodo} setIsAddEditTodo={setIsAddEditTodo} id={eidtTodoId} setEditTotoId={setEditTotoId} />
            <div className="bg-white m-5 rounded shadow-sm text-right flex justify-between">
                <button className='btn bg-white border border-gray-400 p-2' onClick={() => handleSort(todos, 'title')}>Sort By Title</button>
                <input className='border border-gray-300 p-2' type='text' value={search} name='search' onChange={handleSearch} placeholder='Search by Title' />
                <select onChange={handleSelect} className='border border-gray-400 mx-2 p-2'>
                    <option value=''>Filter by Status</option>
                    {filterList.map((o, i) => <option key={i} value={o}>{o}</option>)}
                </select>
            </div>
            {isSort ?
                <TodoItems todos={sortTodos} getUpdateTodoHandler={getUpdateTodoHandler} handleSort={handleSort} deleteTodoIdHandler={deleteTodoIdHandler} />
                :
                <TodoItems todos={todos} getUpdateTodoHandler={getUpdateTodoHandler} handleSort={handleSort} deleteTodoIdHandler={deleteTodoIdHandler} />
            }
        </div>
    )
}

export default TodosApp