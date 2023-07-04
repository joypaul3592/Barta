import React from 'react'

// image import
import logo from '../assect/logot.png'

// Icons Import
import { CiFacebook, CiInstagram, CiLinkedin, CiYoutube } from "react-icons/ci";

export default function Footer() {
    return (
        <div className=' mt-6 pb-10'>
            <div className=' flex items-center justify-center gap-5 text-3xl'>
                <CiFacebook className=' text-amber-500 hover:text-lime-500 cursor-pointer' />
                <CiInstagram className=' text-amber-500 hover:text-lime-500 cursor-pointer' />
                <CiLinkedin className=' text-amber-500 hover:text-lime-500 cursor-pointer' />
                <CiYoutube className=' text-amber-500 hover:text-lime-500 cursor-pointer' />
            </div>

            <div className=' flex items-center justify-between mt-7'>
                <img src={logo} alt="ogo iage" className=' h-12' />
                <p className=' text-amber-400 font-medium'>All credit goes to @JoyPaul</p>
            </div>
        </div>
    )
}
