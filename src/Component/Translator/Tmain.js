import React from 'react'

// Image import
import googleLogo from '../../assect2/googlelogo.svg'
import user from '../../assect2/user.jpg'

// Icons Import
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdImage, IoMdDocument } from "react-icons/io";
import { HiOutlineUsers } from "react-icons/hi";
import { BsFillStarFill } from "react-icons/bs";
import { RiHistoryLine } from "react-icons/ri";
import Translator2 from '../Ttanslator2';

export default function Tmain() {
    return (
        <div className="min-h-screen w-full bg-white relative sco ">
            <div className="min-h-screen w-full bg-white bg-opacity-10 backdrop-blur-xl">

                <div className=' flex items-center justify-between md:px-10 px-5 py-3 border-b border-gray-300'>

                    <div className=' flex items-center gap-8'>
                        <AiOutlineMenu className=' text-xl' />
                        <div className=' flex items-center gap-2'>
                            <img src={googleLogo} alt="googleLogo Image" />
                            <p className=' text-2xl font-medium'>Translate</p>
                        </div>
                    </div>

                    <div className=' flex items-center gap-5'>
                        <svg className=' w-6 text-gray-600 fill-gray-600 bg-transparent ' class="gb_h" focusable="false" viewBox="0 0 24 24"><path d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"></path></svg>
                        <img src={user} alt="user image" className=' rounded-full' />
                    </div>
                </div>

                <div className='md:px-20 px-5'>
                    <div className=' flex flex-wrap items-center gap-5 py-5'>
                        <button className=' flex items-center gap-1 bg-blue-50 border border-blue-200 py-1 px-3 rounded-md text-blue-600 font-semibold text-[15px]'><svg className=' fill-blue-600 text-blue-600' width="20" height="20" viewBox="0 0 24 24" focusable="false" class="ep0rzf NMm5M"><path d="M12.87 15.07l-2.54-2.51.03-.03A17.52 17.52 0 0 0 14.07 6H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"></path></svg> Text</button>


                        <button className=' flex items-center gap-1 bg-white hover:bg-blue-50 border border-blue-200 py-1 px-3 rounded-md text-blue-600 font-semibold text-[15px]'>
                            <IoMdImage /> Images
                        </button>
                        <button className=' flex items-center gap-1 bg-white border border-blue-200 py-1 px-3 rounded-md text-blue-600 font-semibold hover:bg-blue-50 text-[15px]'>
                            <IoMdDocument /> Documents
                        </button>
                        <button className=' flex items-center gap-1 bg-white border border-blue-200 py-1 px-3 rounded-md text-blue-600 font-semibold text-[15px] hover:bg-blue-50'>
                            <svg className=' fill-blue-600 text-blue-600' width="20" height="20" viewBox="0 0 24 24" focusable="false" class="ep0rzf NMm5M"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95a15.65 15.65 0 0 0-1.38-3.56A8.03 8.03 0 0 1 18.92 8zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56A7.987 7.987 0 0 1 5.08 16zm2.95-8H5.08a7.987 7.987 0 0 1 4.33-3.56A15.65 15.65 0 0 0 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2s.07-1.35.16-2h4.68c.09.65.16 1.32.16 2s-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 0 1-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2s-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"></path></svg> Websites
                        </button>
                    </div>

                </div>
                <div className=' container mx-auto md:px-20 px-5'>
                    <Translator2 />

                    <div className=' flex items-center gap-5 justify-center py-10'>
                        <div className=' w-12 h-12 border border-gray-300 rounded-full flex items-center justify-center hover:text-blue-500 hover:border-blue-200 cursor-pointer'>
                            <RiHistoryLine />
                        </div>
                        <div className=' w-12 h-12 border border-gray-300 rounded-full flex items-center justify-center hover:text-blue-500 hover:border-blue-200 cursor-pointer'>
                            <BsFillStarFill />
                        </div>
                        <div className=' w-12 h-12 border border-gray-300 rounded-full flex items-center justify-center hover:text-blue-500 hover:border-blue-200 cursor-pointer'>
                            <HiOutlineUsers />
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}
