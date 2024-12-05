import './index.css'
import Canvas from './Canvas';
import data from './data';

import LocomotiveScroll from 'locomotive-scroll';
import { useEffect, useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from "gsap";
import {Expo} from "gsap"


function App() {
  const [showCanvas, setShowCanvas] =  useState(false)
  const headingRef = useRef(null);
  const growingSpan = useRef(null);
  
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
  },[])

  useEffect(()=>{
    const handleClick =(e)=>{
      setShowCanvas((prevShowCanvas)=>{
        
        if(!prevShowCanvas){
          gsap.set(growingSpan.current,{
            top:e.clientY,
            left:e.clientX
          })
          
          gsap.to("body",{
            color:"#000",
            backgroundColor:"#fd2c2a",
            duration:1.2,
            ease:"power2.inOut"
          })
    
          gsap.to(growingSpan.current,{
           scale:1000,
          duration:2,
          ease:"power2.inOut",
          onComplete:()=>{
            gsap.set(growingSpan.current,{
              scale:0,
              clearProps:"all"
            })
        },  
          });
        } else{
          gsap.to("body",{
            color:"#fff",
            backgroundColor:"#000",
            duration:1.2,
            ease:"power2.inOut"
          })
        }
        return !prevShowCanvas;
    })

  };
    const headingElement = headingRef.current;
    headingElement.addEventListener("click", handleClick);
   

    return ()=> headingElement.removeEventListener("click",handleClick)

  
  },[])
  
  return (
  <>
  <span ref={growingSpan} className='rounded-full growing block fixed top-[-20] left-0 w-5 h-5'></span>
    <div className="w-full min-h-screen relative font-['Helvetica-Now-Display']">
      {showCanvas && data[0].map((canvasdets,index)=> (
        <Canvas key={index} details = {canvasdets}/>
      ))}
      <div className='w-full h-screen z-[1] relative'>
      <nav className="w-full flex justify-between p-8 bg-black z-50">
        <div className="brand text-2xl regular">TheTLEstudios</div>
        <ul className="flex space-x-4">
          {['Home', 'About', 'Contact', 'Portfolio'].map((link, index) => (
            <li key={index} className=" hover:text-gray-600 transition duration-300">
              <a href={`#${link.toLowerCase()}`}
              className='text-md hover:text-gray-300'
              >{link}</a>
            </li>
          ))}
        </ul>
      </nav>
      <div className='textcontainer px-[20%] w-full'>
        <div className="text w-[50%]">
          <h3 className="text-4xl leading-[1.5]">
          At Thirtysixstudio, we build immersive digital experiences for brands with a purpose.
          </h3>
          <p className='text-md w-[80%] mt-10 font-normal'>We’re a boutique production studio focused on design, motion, and creative technology, constantly reimagining what digital craft can do for present-time ads and campaigns.</p>
          <p className='text-md mt-10'>scroll</p>
        </div>
      </div>
      <div className='overflow-x-hidden  w-full'>
      <div className='w-full absolute bottom-0 left-10'>
        <h1 ref={headingRef} className='text-[17rem] font-normal tracking-tight leading-none pl-'>theTle'sStudio</h1>
      </div>
      </div>
      
      </div>
     </div>
     <div className='w-full relative h-screen px-10 mt-32'>
     {data[1].map((canvasdets,index)=> (
        <Canvas key={index} details = {canvasdets}/>
      ))}
      <h1 className='text-8xl tracking-tight'>about the brand</h1>
        <p className='text-4xl leading-[1.8] w-[80%] mt-10 font-light'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <img className='w-[80%] mt-10  z-[0]' src="https://directus.funkhaus.io/assets/b3b5697d-95a0-4af5-ba59-b1d423411b1c?withoutEnlargement=true&fit=outside&width=1400&height=1400"
          alt=""/>
        
     </div>
     

  </>
  )
}

export default App
