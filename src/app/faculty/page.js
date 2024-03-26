import bits_logo from '../../assets/bits_logo.png';
import Image from 'next/image';
import Link from 'next/link';

export default function faculty() {
  return (
    <main>
      <div className="flex flex-col items-center bg-green-200 h-screen w-screen justify-center">
        <Image src={bits_logo} className="justify-center items-center ml-20 md:ml-12 mt-4 md:h-[15%] md:w-[25%]" alt="BITS Logo" />
        <div className='flex flex-col items-center h-screen justify-evenly mb-20 '>
          <div className="w-[15rem] md:w-[30rem]">
            <Link href="/faculty/advertisement">
                <button className='bg-red-600 text-2xl h-[6rem] px-4 py-2 mx-4 my-4 flex items-center justify-center w-full font-bold text-center text-white shadow-md shadow-right-bottom shadow-black hover:bg-red-800 rounded-md transform hover:-translate-y-2 hover:translate-x-2 transition duration-300'>ADVERTISEMENT</button>
            </Link>
          </div>
          <div className="w-[15rem] md:w-[30rem]">
            <Link href="/faculty/application">
                <button className='bg-blue-600 h-[6rem] text-2xl px-4 py-2 mx-4 my-4 flex items-center justify-center w-full font-bold text-center text-white shadow-md shadow-right-bottom shadow-black hover:bg-blue-800 rounded-md transform hover:-translate-y-2 hover:translate-x-2 transition duration-300'>APPLICATIONS</button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
