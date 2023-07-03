import './App.css';

// Component import
import homeBg from '../src/assect/homebg2.png'
import Translator from './Component/Translator';
import Footer from './Component/Footer';
import Navbar from './Component/Navbar';



function App() {
  return (
    <div className="min-h-screen w-full bg-white relative sco ">
      <img src={homeBg} alt="home bg image" className=' absolute top-0 left-0 h-full w-full bg-repeat-y' />
      <div className=" min-h-screen w-full bg-white bg-opacity-10 backdrop-blur-xl">
        <div className=' container mx-auto xl:px-20 px-5 '>

          <Navbar />
          <Translator />
          <Footer />

        </div>
      </div>
    </div>
  );
}

export default App;
