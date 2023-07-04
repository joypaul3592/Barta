import './App.css';
import { useState } from 'react';

// Image Import
import homeBg from '../src/assect/homebg2.png';

// Component import
import Translator from './Component/Translator';
import Footer from './Component/Footer';
import Navbar from './Component/Navbar';
import BgChanger from './Component/BgChanger';

function App() {
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
  );
}

export default App;
