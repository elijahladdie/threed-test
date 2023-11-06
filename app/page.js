"use client";

import Link from "next/link";
import { Button } from "flowbite-react";

export default function Home() {
  return (
    <main className='text-center flex flex-col items-center'>
      <h1 className="lg:text-6xl text-4xl">Unleash 3D Magic from Your Text</h1>
      <h2 className="m-5">Experience the power of 3D text in seconds. Elevate your content and captivate your audience.</h2>
      <Link href="/editor" className="m-3"> <Button gradientMonochrome="purple">Get started</Button></Link>
      
    </main>
  )
}
