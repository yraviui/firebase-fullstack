import React from 'react'
import SwichIcon from '../components/SwichIcon'
const TodoItems = ({ todos, getUpdateTodoHandler, deleteTodoIdHandler }) => {
    return (
        <div className='overflow-auto rounded-lg shadow m-5'>
            <table className='w-full'>
                <thead className='bg-gray-50 border-b-2 border-gray-200'>
                    <tr>
                        <th className='p-3 text-sm font-semibold tracking-wide text-left'>Title</th>
                        <th className='p-3 text-sm font-semibold tracking-wide text-left'>Description</th>
                        <th className='p-3 text-sm font-semibold tracking-wide text-left'>Status</th>
                        <th className='p-3 text-sm font-semibold tracking-wide text-left'>Action </th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map(o =>
                        <tr key={o._id}>
                            <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>{o.title}</td>
                            <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>{o.description}</td>
                            <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>{o.status}</td>
                            <td className='flex gap-5 p-2'>
                                <button onClick={() => getUpdateTodoHandler(o._id)}><SwichIcon val='FaRegEdit' /></button>
                                <button onClick={() => deleteTodoIdHandler(o._id)}><SwichIcon val='LuTrash' /></button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default TodoItems