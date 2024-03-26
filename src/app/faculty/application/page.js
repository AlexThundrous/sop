'use client';
import React,{ useState } from 'react';
import Image from 'next/image';
import bits_logo from '../../../assets/bits_logo.png';


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
            <div className=" bg-red-300 w-[14rem] text-center my-auto h-[4rem] rounded-full text-2xl font-bold text-black"> Sort By CG </div>
            <div className={`absolute top-0 left-0 w-[4rem] h-[4rem] bg-black rounded-full opacity-50 transition-transform duration-500 ${isClicked ? 'transform translate-x-[10rem]' : '}'}`} onClick={handleClick}></div>
            </div>
          </div>
        </div>
      </main>
      
    );
}