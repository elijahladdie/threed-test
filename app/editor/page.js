"use client";
import { useState,useEffect } from 'react';
import { Canvas } from '@react-three/fiber'
import { Center, Text3D, OrbitControls } from '@react-three/drei';
import fontly from "./important-font.json";
import { Label, TextInput } from 'flowbite-react';
import { BiSolidEdit } from 'react-icons/bi';
import { RangeSlider } from 'flowbite-react';
import Head from 'next/head';
import Loading from '../components/Loading';

const  Editor = ()=> {
const [userInput, setUserInput] = useState('Laddie');
const [rotSize, SetRotSize] = useState(0);
const [fontSize, SetFontSize] = useState(2);
const [isLoading, setIsLoading] = useState(true)

useEffect(()=>{

 setTimeout(()=>{
 setIsLoading(false);
 },1500);

},[]);

  return (
    <>
    {
      isLoading ? <Loading/> : (
      <>
      <Head>
        <title>T3D | Editor</title>
        </Head>
    
        <div className="max-w-md p-4">
          <div className="mb-2 block p-2">
            <Label htmlFor="email4"  className='text-blue-200 px-3'  value="Text (max 10 character)" />
          <TextInput id="email4" type="text" icon={BiSolidEdit} placeholder="Type your text " onChange={(e)=>setUserInput(e.target.value)} required maxLength={10} />
    
          </div>
         
            <div className="mb-1 block p-2">
              <Label htmlFor="md-range" value="Rotate (Y) "  className='text-blue-200 px-3'  />
            <RangeSlider id="md-range" sizing="md" step={0.1} onChange={(e)=>SetRotSize(e.target.value)} min={-1} max={1}/>
            <span className='flex justify-between'><p>-1</p><p>0</p><p>1</p></span>
    
            </div>
            <div className="mb-1   block p-2">
              <Label htmlFor="md-range" value="Font Size"  className='text-blue-200 px-3'  />
            <RangeSlider id="md-range" sizing="md" step={0.1} onChange={(e)=>SetFontSize(e.target.value)} min={0} max={2}/>
            <span className='flex justify-between'><p>0</p><p>2</p></span>
    
            </div>
        </div>
    
        
        <Canvas orthographic camera={{ position: [0, -100, 0], zoom: 100 }}>
    
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 10]} />
          <Scene userInput={userInput} rotSize={rotSize} fontSize={fontSize} anchorX="center" />
          <axesHelper scale={2} position={[0, 0, 0]} onUpdate={(self) => self.setColors('#ff2080', '#20ff80', '#2080ff')} />
          <OrbitControls enableZoom={false} enablePan={false} minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} />
        </Canvas></>)
    }
  
    </>
  )
}

export function Scene({userInput,rotSize,fontSize}) {
  return (
    <>
      <Center rotation={[rotSize, 0, 0]} >
        <Text3D
          curveSegments={32}
          bevelEnabled
          bevelSize={0.04}
          bevelThickness={0.1}
          height={0.5}
          lineHeight={0.5}
          letterSpacing={-0.06}
          size={fontSize}
          font={fontly}>
          {userInput.split(/ /).join('\n')}
          <meshNormalMaterial />
        </Text3D>
      </Center>
    </>
  )
}

export default   Editor 