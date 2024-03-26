import Image from 'next/image';
import bits_logo from '../../../assets/bits_logo.png';

export default function Application() {
    return(
      <main>
        <div className="flex flex-col bg-cyan-200 h-screen w-screen">
          <Image src={bits_logo} className="justify-start items-start ml-12 mt-4 md:h-[15%] md:w-[30%]" alt="BITS Logo" />
          <div className="flex ml-auto mr-2"><button className=" bg-red-300 w-[15rem] h-[4rem] rounded-3xl text-2xl font-bold text-black"> Sort By CGPA</button> </div>
        </div>
      </main>
      
    );
}