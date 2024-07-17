import React from 'react'
import { UserAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import SwichIcon from './SwichIcon'
import toast from 'react-hot-toast'

const Header = () => {
    const { user, logOut } = UserAuth()
    const navigate = useNavigate()
    const handleLogout = async (e) => {
        try {
            await logOut()
            navigate('/')
        } catch (error) {
            toast.error(error.message)
        }
    }
    return (
        <header className='flex justify-between items-center p-2 border-b-2 shadow-sm'>
            <h1 className='p-2 border border-gray-200 shadow-sm'>TODO APP</h1>
            <span>{user.email}</span>
            <button onClick={handleLogout}><SwichIcon val='LuLogOut' /></button>
        </header>
    )
}

export default Header