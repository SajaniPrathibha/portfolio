import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from "framer-motion";
import { styles } from '../styles';
import { services } from "../constants";
import { fadeIn,textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({index,title,icon}) =>{
  return(
    <Tilt className='xs:w-[50px] w-[250px] translate-y-10 translate-x-10'>
      <motion.div
      variants={fadeIn("right","spring",0.5 * index,0.75)}
        className= 'w-full bg-gradient-to-r from-[#0F172A] to-[#6A0572] p-[2px] rounded-[20px] shadow-card'
      >
      <div options={{
        max:45,
        scale:1, speed:450
      }}
      className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px]
      flex justify-evenly items-center flex-col'
      >
      <img src={icon} alt="" 
        className='w-16 h-16 object-contain'
      />
      <h3 className="text-white text-[20px] font-bold text-center">
        {title}
      </h3>
      </div>

      </motion.div>

    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="w-full container mx-auto px-4 sm:px-6 md:px-10">
        <p className={`${styles.sectionSubText} text-center sm:text-left`}>Introduction</p>
        <h2 className={`${styles.sectionHeadText} text-center sm:text-left`}>Overview</h2>

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-5 text-gray-400 text-sm sm:text-base md:text-lg max-w-full sm:max-w-xl md:max-w-3xl lg:max-w-7xl leading-relaxed text-center sm:text-left mx-auto"
        >
          I am a strong believer in positive thinking, teamwork, and effective leadership. I take pride in my ability
          to lead and manage tasks efficiently, ensuring that every project I undertake is completed with responsibility and dedication.
          My proactive approach allows me to adapt
          to challenges, inspire my team, and maintain a solution-oriented mindset in any work environment.
        </motion.p>

        <div className="mt-10 flex flex-col sm:flex-row flex-wrap justify-center gap-5 sm:gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} index={index} {...service} />
          ))}
        </div>
      </motion.div>

      <br/>
    </>
  )
}

export default SectionWrapper (About, "about")