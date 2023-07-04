import { useRef } from 'react'

// Icons Import
import { IoImageOutline } from "react-icons/io5";


export default function BgChanger({ setBgImage }) {
    const fileInputRef = useRef(null);
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = (e) => {
            setBgImage(e.target.result);
        };
        reader.readAsDataURL(file);
    };
    const handleButtonClick = () => {
        fileInputRef.current.click();
    };


    return (
        <div className=' absolute top-8 left-8'>
            <input
                type="file"
                onChange={handleFileChange}
                accept="image/*"
                ref={fileInputRef}
                style={{ display: 'none' }}
            />
            <button onClick={handleButtonClick} className=' text-amber-400'><IoImageOutline /></button>
        </div>
    )
}
