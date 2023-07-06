import React from 'react'
import { useState } from 'react';

// Image Import
import homeBg from '../../assect/homebg2.png';


// Component import
import Navbar from '../Navbar';
import Translator from '../Translator';
import Footer from '../Footer';
import BgChanger from '../BgChanger';


export default function Main() {

    const [bgImage, setBgImage] = useState(homeBg);
    return (
        <div className="min-h-screen w-full bg-white relative sco ">
            <img src={bgImage} alt="home bg image" className="absolute top-0 left-0 h-full w-full bg-repeat-y" />
            <div className="min-h-screen w-full bg-white bg-opacity-10 backdrop-blur-xl">
                <div className="container mx-auto xl:px-20 px-5">
                    <Navbar />
                    <Translator />
                    <Footer />
                </div>
            </div>
            <BgChanger setBgImage={setBgImage} />
        </div>
    )
}
