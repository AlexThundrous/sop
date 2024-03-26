import bits_logo from '../../../assets/bits_logo.png';
import Image from 'next/image';
export default function Advertisement() {
    return(
      <main>
      <div className="flex flex-col bg-sky-100 h-screen justify-start">
        <Image src={bits_logo} className="justify-start items-start ml-12 mt-4 md:h-[15%] md:w-[30%]" alt="BITS Logo" />
      </div>
    </main>
      
    );
}