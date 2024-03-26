import bits_logo from '../../assets/bits_logo.png';
import Image from 'next/image';
import Link from 'next/link';

export default function faculty() {
  return (
    <main>
      <div className="flex flex-col items-center bg-sky-100 h-screen justify-center">
        <Image src={bits_logo} className="justify-center items-center ml-12 mt-4 md:h-[15%] md:w-[30%]" alt="BITS Logo" />
        <div className='flex flex-col items-center h-screen justify-center mt-20 mb-20 '>
          <div className="w-60">
            <Link href="/faculty/advertisement">
                <button className='bg-red-700 px-4 py-2 mx-4 my-4 flex items-center justify-center w-full font-bold text-center text-yellow-500 shadow-lg shadow-right-bottom shadow-black hover:bg-red-900 rounded-md transform hover:-translate-y-2 hover:translate-x-2 transition duration-300'>ADVERTISEMENT</button>
            </Link>
          </div>
          <div className="w-60">
            <Link href="/faculty/application">
                <button className='bg-red-700 px-4 py-2 mx-4 my-4 flex items-center justify-center w-full font-bold text-center text-yellow-500 shadow-lg shadow-right-bottom shadow-black hover:bg-red-900 rounded-md transform hover:-translate-y-2 hover:translate-x-2 transition duration-300'>APPLICATIONS</button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
