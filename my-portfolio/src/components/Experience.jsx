import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { motion } from "framer-motion";
import { styles } from '../styles';
import { SectionWrapper } from "../hoc";
import { textVariant } from '../utils/motion';
import { experiences } from '../constants';



const ExperienceCard = ({experience}) =>(
  <VerticalTimelineElement
  contentStyle={{background:"#1d1836",color:"#fff"}}
  contentArrowStyle={{borderRight:'7px solid #232631'}}
  date={experience.date}
    iconStyle={{ background: experience.iconBg }} // ✅ Correct
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img
          src={experience.icon}
          alt={experience.company_name}
          className="w-[60%] h-[60%] object-contain"
        />
      </div>
    } 
  >
    <div>
      <h3 className="text-white text-[24px] font-bold">
      {experience.title}
      </h3>
      <p className='text-secondary text-[16px] font-semibold' style={{margin:0}}>{experience.company_name}</p>
    </div>
    <ul className="mt-5 list-disc ml-5 space-y-2">
    {experience.points.map((point,index) =>(
      <li
      key={`experience-point-${index}`}
       className="text-white-100 text-[14px] pl-1 tracking-wider">
       {point}

      </li>
    ))}

    </ul>
  </VerticalTimelineElement>
)

const Experience = () => {
  return (
  <>
      <motion.div
        variants={textVariant()}
        className="w-full flex flex-col items-center sm:items-start px-4 sm:px-6 md:px-10 py-12 sm:py-16 md:py-20 max-w-7xl mx-auto"
      >
        <p className={`${styles.sectionSubText} text-center sm:text-left`}>Experience</p>
        <h2 className={`${styles.sectionHeadText} text-center sm:text-left`}>Work Experience</h2>
      </motion.div>


      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}


        </VerticalTimeline>
      </div>
  </>
  )
}

export default SectionWrapper (Experience,"work")