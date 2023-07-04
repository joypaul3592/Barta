import React from 'react'

// Image import
import logo from '../assect/logo.png'

export default function Navbar({ setBgImage }) {
    return (
        <div className=' flex items-center justify-between pt-4  text-amber-400'>
            <img src={logo} alt="logo image" className=' h-12' />
            <div className=' flex items-center gap-14 font-semibold text-lg '>
                <a href='#' className='hover:text-amber-500 hidden md:block'>Home</a>
                <a href='#' className='hover:text-amber-500 hidden md:block'>About</a>
                <a href='#' className='hover:text-amber-500 hidden md:block'>Blog</a>
                <button className=' py-1 px-7 border border-amber-400 rounded-md hover:bg-amber-500 hover:border-amber-600 hover:text-black '>Login</button>
            </div>
        </div>
    )
}
