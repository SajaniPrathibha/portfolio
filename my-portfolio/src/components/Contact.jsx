import React from "react";
import { SectionWrapper } from "../hoc";
import { slideIn, textVariant } from "../utils/motion";
import { motion } from "framer-motion";
import { styles } from "../styles";

const Contact = () => {
  return (
    <div className="xl:mt-12 xl:flex-row flex-col flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="w-full container mx-auto px-4 sm:px-6 md:px-10"
      >
        <p className={`${styles.sectionSubText} text-center sm:text-left`}>Let's keep in touch</p>
        <h2 className={`${styles.sectionHeadText} text-center sm:text-left`}>Contact</h2>
        <br/>



        {/* Card Container */}
        <div className="mt-10 grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-y-6 md:gap-y-8 gap-x-5 lg:gap-x-80">

          {/* Card 1 - Personal Information */}
          <div className="bg-gray-900 text-white p-6 rounded-2xl shadow-md md:w-[350px]">
            <h3 className="text-xl font-bold mb-2 transform translate-x-4">Personal Info</h3>
            <div className="transform translate-x-8"> {/* Shift content right */}
              <p><span className="font-semibold">Name:</span> Sarukkali Mahavidanage Sajani Prathibha</p>
              <p><span className="font-semibold">Birthday:</span> 03 - 12 - 1999</p>
              <p><span className="font-semibold">NIC:</span> 1999838123</p>
              <p><span className="font-semibold">Gender:</span> Female</p>
            </div>
          </div>


          {/* Card 2 - Certifications */}
          <div className="bg-gray-900 text-white p-6 rounded-2xl shadow-md md:w-[350px]">
            <h3 className="text-xl font-bold mb-2 transform translate-x-4">Certifications</h3>
            <div className="transform translate-x-8"> {/* Shift content right */}
              <ul className="list-disc space-y-1">
                <li>CCNA: Introduction to Networks</li>
                <li>CISCO: Introduction to IoT</li>
                <li>CISCO: IT Essentials</li>
                <li>CCNA: Switching, Routing, and Wireless Essentials</li>
              </ul>
            </div>
          </div>

          {/* Card 3 - Contact Details */}
          <div className="bg-gray-900 text-white p-6 rounded-2xl shadow-md md:w-[350px]">
            <h3 className="text-xl font-bold mb-2 transform translate-x-4">Contact</h3>
            <div className="transform translate-x-8"> {/* Shift content right */}
              <p><span className="font-semibold">Phone:</span> 077 959 5299</p>
              <p><span className="font-semibold">Mail:</span> sms.prathibha@gmail.com</p>
              <p>
                <span className="font-semibold">Github:</span>
                <a href="https://github.com/SajaniPrathibha" className="text-blue-400 ml-1" target="_blank" rel="noopener noreferrer">
                  SajaniPrathha.github.com
                </a>
              </p>
              <p>
                <span className="font-semibold">LinkedIn:</span>
                <a href="https://www.linkedin.com/in/sajani-prathibha-b6b87a226/" className="text-blue-400 ml-1" target="_blank" rel="noopener noreferrer">
                  SajaniPrathha.linkedin.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
