"use client";
import React from 'react';
import img from '/Users/janvier/Desktop/Learning/threed_copy/public/mine.jpg'
import Image from 'next/image';
const About = () => {

  return (
    <>
      <div className='flex h-[100%] text-center justify-center flex-col px-[10%]'>
        <div className='text-4xl py-3'>
          <h1>Welcome in the world of 3D dreams turned into reality!</h1>

        </div>
        <div className='flex items-center  justify-center   flex-wrap lg:flex-nowrap '>
          <Image src={img} className='rounded w-[30%] ' alt="Hello" />
          <p className='lg:text-lg sm:text-sm text-left px-3'>
            From a young age, I've been &#39 enamored by the allure of three-dimensional art. I've always yearned to create and share that magic.<br />
            That's why I crafted this 2D to 3D text app – my personal vision brought to life.

            This app is a gateway to transform ordinary text into captivating 3D visuals. 
            It's designed for dreamers and artists, professionals, and enthusiasts alike.

            <span className='decoration-solid underline decoration-indigo-500 decoration'>This expresses for me how far you can reach if you continue to focus on your dreams/goals everthing you wished to achieve, <br/><b> you can do it if you work on it  quietly</b></span>.
 
            Thank you for being part of my dream. I hope my app ignites your creativity and brings joy to your world, 
            just as it has for me.

            Welcome to the world of 3D magic.


          </p>
        </div>


        <span className='text-right'>  - Elie Kuradusenge</span>

      </div>
    </>
  )
}

export default About