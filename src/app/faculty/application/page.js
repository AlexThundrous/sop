import Image from 'next/image';
import bits_logo from '../../../assets/bits_logo.png';
import { useState } from 'react';

export default function Application() {
    const [isClicked, setIsClicked] = useState(false);
    
    const handleClick = () => {
      setIsClicked(!isClicked);
    };

    return(
      <main>
        <div className="flex flex-col bg-cyan-200 h-screen w-screen">
          <Image src={bits_logo} className="justify-start items-start ml-12 mt-4 md:h-[15%] md:w-[30%]" alt="BITS Logo" />
          <div className="flex ml-auto mr-2">
            <div className='relative'>
            <button className=" bg-red-300 w-[15rem] h-[4rem] rounded-full text-2xl font-bold text-black" onClick={handleClick}></button>
            <div className={`absolute top-0 left-0 w-[4rem] h-[4rem] bg-black rounded-full opacity-50 transition-transform duration-500 ${isClicked ? 'transform translate-x-full' : '}'}`}></div>
            </div>
          </div>
        </div>
      </main>
      
    );
}