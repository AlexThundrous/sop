import bits_logo from '../../../assets/bits_logo.png';
import Image from 'next/image';
export default function Advertisement() {
    return(
      <main>
      <div className="flex flex-col items-center bg-sky-100 h-screen justify-center">
        <Image src={bits_logo} className="justify-center items-center ml-12 mt-4 md:h-[15%] md:w-[30%]" alt="BITS Logo" />
      </div>
    </main>
      
    );
}