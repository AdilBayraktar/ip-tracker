import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='flex justify-center px-10 h-16 items-center bg-white top-0 text-green-800 shadow-md sticky z-50'>
            <Link to={'/'} className='cursor-pointer'>
                <p className='text-3xl font-bold uppercase'>IP Tracker</p>
            </Link>
        </div>
    )
}

export default Navbar