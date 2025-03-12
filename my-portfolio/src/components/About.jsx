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
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
        <motion.p variants={fadeIn("","",0.1,1)}
        className='mt-5 text-gray-400 text-[17px] max-w-7xl leading-[20px]'>
          I am a strong believer in positive thinking, teamwork, and effective leadership. I take pride in my ability 
          to lead and manage tasks efficiently, ensuring that every project I undertake is completed with responsibility and dedication.
          My proactive approach allows me to adapt 
          to challenges, inspire my team, and maintain a solution-oriented mindset in any work environment.


        </motion.p>
        <div className="mt-20 flex flex-wrap gap-10">
          {services.map((service,index)=>(
            <ServiceCard key={services.title} index={index} {...service}/>
          ))}
        </div>
      </motion.div>
      <br/>
    </>
  )
}

export default SectionWrapper (About, "about")