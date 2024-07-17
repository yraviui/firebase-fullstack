import React from 'react'
import { LuLogOut } from "react-icons/lu";  // signout
import { FaRegEdit } from "react-icons/fa"; // edit
import { LuTrash } from "react-icons/lu";  // trash
import { IoIosArrowBack } from "react-icons/io"; // back
import { IoIosArrowDown } from "react-icons/io"; // down arrow




const SwichIcon = ({ val }) => {
    switch (val) {
        case 'LuLogOut': return <LuLogOut className='cursor-pointer' />
        case 'FaRegEdit': return <FaRegEdit className='cursor-pointer' />
        case 'LuTrash': return <LuTrash className='cursor-pointer' />
        case 'IoIosArrowBack': return <IoIosArrowBack className='cursor-pointer' />
        case 'IoIosArrowDown': return <IoIosArrowDown className='cursor-pointer' />
        default: <LuTrash className='cursor-pointer' />
    }
}

export default SwichIcon