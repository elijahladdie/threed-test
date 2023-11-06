import Link from 'next/link';
import React from 'react';


function Navbar() {
  return (
    <div className="flex  flex-row items-center justify-evenly p-3 ">
        <h1>T3D</h1>
        <div className=''>
          <Link href="/" className='px-2'>Home</Link>
          <Link href="/editor" className='px-2'>Editor</Link>
          <Link href="/about" className='px-2'>About</Link>
            
        </div>
        </div>
  )
}

export default Navbar