'use client';
import React,{ useState } from 'react';
import Image from 'next/image';
import bits_logo from '../../../assets/bits_logo.png';
import ApplicationCard from '@/components/applicationcard';

export default function Application() {
    const [isClicked, setIsClicked] = useState(false);
    
    const handleClick = () => {
      setIsClicked(!isClicked);
    };

    return(
      <main>
        <div className="flex flex-col bg-cyan-200 h-screen w-screen">
          <Image src={bits_logo} className="justify-start items-start ml-12 mt-4 md:h-[15%] md:w-[30%]" alt="BITS Logo" />
          <div className="flex ml-auto mr-7">
            <div className='relative'>
            <div className={`w-[10rem] text-center my-auto h-[4rem] rounded-full text-xl font-semibold text-black ${isClicked ? 'transform bg-red-500' : 'bg-red-200'}`}> <span style={{ lineHeight: "4rem" }}> Sort By CG </span></div>
            <div className={`absolute top-0 left-0 w-[4rem] h-[4rem]  rounded-full transition-transform duration-500 ${isClicked ? 'transform translate-x-[6rem] bg-red-900 opacity-90 ' : 'bg-white opacity-70'}`} onClick={handleClick}></div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center mt-7 ">
            <ApplicationCard comments={"lorem"} justification={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."} student_id={"Student X"} cg={"10.00"}/>
            <ApplicationCard comments={"lorem"} justification={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."} student_id={"Student Y"} cg={"7.00"}/>
          </div>
        </div>
      </main>
      
    );
}