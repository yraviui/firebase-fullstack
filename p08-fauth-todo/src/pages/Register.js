import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'
import toast from 'react-hot-toast'

const Register = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const { signUp } = UserAuth()
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            await signUp(email, password)
            toast.success('User register successfully!')
            navigate("/");
        } catch (err) {
            setError(err.message);
            toast.error(err.message)
        }
    }
    return (
        <div className='w-full my-16 p-4'>
            <div className="bg-white p-8 rounded shadow-md w-full sm:w-96 m-auto">
                <h2 className="text-2xl font-semibold mb-6 text-center">Regiser</h2>
                {error && <div className='bg-red-200 text-red-500 p-2'>{error}</div>}
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input onChange={(e) => setEmail(e.target.value)} type="text" id="email" name="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="Enter your email" />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <input onChange={(e) => setPassword(e.target.value)} type="password" id="password" name="password" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="Enter your password" />
                    </div>
                    <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Register</button>
                </form>
                <p className='p-2'>Already have an account yet? <Link to='/' className='underline'>Login</Link> </p>
            </div>
        </div>
    )
}

export default Register