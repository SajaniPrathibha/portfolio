import React from 'react'
import {motion} from 'framer-motion';
import { styles } from '../styles';
import {ComputersCanvas} from './canvas'
import scrollGif from '../assets/scroll.gif';

const Hero = () => {
  return (
    // <div className="hero">
    //   hello
    // </div>
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] 
      max-w-7xl mx-auto flex flex-row ite-start gap-5`}>
        <div className="flex flex-row justify-start items-start translate-x-4">
          
          <div className="w-1 sm:h-80 h-40 violet-gradient  ">   
          </div>
          <div className='lg:translate-x-10  '>
            <h1 className="text-white text-4xl"> Hi,
              I'm Sajani Prathibha
            </h1>
            <div>
              <h2>Entry-level software developer with a passion for learning 
              and problem-solving</h2>
            </div>
          </div>
        </div>
      </div>
      <ComputersCanvas/>
      
      <div className="absolute xs:bottom-20 bottom-32 w-full flex 
      justify-center items-center ">
        <a href="#about"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
          }}>
          <img src={scrollGif} alt="GIF Animation"
           className="w-12 h-12 flex justify-center items-start p-4 cursor-pointer" />
        </a>

      </div>
    </section>
  )
}

export default Hero