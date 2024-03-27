'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';


export default function Home() {

  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {

    const timer = setTimeout(() => {
      setIsLoading(false);

      router.push('/faculty');
    }, 1000);

    return () => clearTimeout(timer);
  }, []);


  return (
    <main className="bg-blue-600 flex min-h-screen items-center justify-center">
      <div className="flex gap-2">
      <span className='sr-only'>Loading...</span>
        <div className="w-5 h-5 rounded-full  bg-black animate-bounce [animation-delay:-0.3s]"></div>
        <div className="w-5 h-5 rounded-full  bg-black animate-bounce [animation-delay:-0.15s]"></div>
        <div className="w-5 h-5 rounded-full animate-bounce bg-black"></div>
      </div>
      {isLoading && <></>}
    </main>
  );
}
