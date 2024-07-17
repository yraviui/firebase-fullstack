import React, { useState } from 'react'

const StatusBtnGroup = ({ status, setStatus }) => {
    const [btnTxt] = useState(['To Do', 'In Progress', 'Done'])
    const btnActive = (val) => {
        setStatus(val)
    }
    return (
        <>
            <div className='flex items-center gap-1 w-full'>
                Status: {btnTxt?.map((o, i) => <div key={i} className={status === o ? 'bg-green-700 text-blue-50 p-2 w-32 text-center cursor-pointer' : 'bg-transparent border border-gray-300 p-2 w-32 text-center cursor-pointer'} onClick={() => btnActive(o)}>{o}</div>)}
            </div>
        </>
    )
}

export default StatusBtnGroup