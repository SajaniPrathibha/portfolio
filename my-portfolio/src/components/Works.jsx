import React, { useState } from "react";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { motion } from "framer-motion";
import { projects } from "../constants";
import { SectionWrapper } from "../hoc";
import { github } from "../assets";
import { Tilt } from "react-tilt";

const ProjectCard = ({ index, project, onClick }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      onClick={() => onClick(project)}
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-transparent p-5 rounded-2xl sm:w-[360px] w-full cursor-pointer"
      >
        <div className="relative w-full h-[230px] translate-y-10">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={(e) => {
                e.stopPropagation();
                window.open(project.source_code_link, "_blank");
              }}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img src={github} alt="git" className="w-1/2 h-1/2 object-contain" />
            </div>
          </div>
          <div className="mt-10 bg-[#000033] p-3 rounded-b-2xl z-10 space-y-4 mb-10">
            <h3 className="text-white font-bold text-[24px] text-center">{project.name}</h3>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [btnHover, setBtnHover] = useState(false);

  const handleClickOutside = (e) => {
    if (e.target.id === "modal-overlay") {
      setSelectedProject(null);
    }
  };

  return (
    <>
      <motion.div variants={textVariant()} className="w-full container mx-auto px-4 sm:px-6 md:px-10">
        <p className={`${styles.sectionSubText} text-center sm:text-left`}>My works</p>
        <h2 className={`${styles.sectionHeadText} text-center sm:text-left`}>Projects</h2>

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-5 text-gray-400 text-sm sm:text-base md:text-lg max-w-full sm:max-w-2xl md:max-w-5xl lg:max-w-7xl leading-relaxed text-center sm:text-left mx-auto"
        >
          These projects showcase the skills and experience I have gained so far in full-stack development.
          Through working on various applications, I have strengthened my expertise in frontend and backend
          technologies, database management, authentication, API integration, and responsive design.
        </motion.p>
      </motion.div>


      <div className="mt-20 flex flex-wrap gap-20 px-4 sm:px-6 md:px-10 justify-center sm:justify-start">
        {projects.map((project, index) => (
          <div key={index} className="w-[90%] sm:w-[360px] mx-auto sm:mx-0">
            <ProjectCard index={index} project={project} onClick={setSelectedProject} />
          </div>
        ))}
      </div>


      {/* Pop-up Modal */}
      {selectedProject && (
        <div
          id="modal-overlay"
          className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-60 backdrop-blur-md z-50"
          onClick={handleClickOutside}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-white w-[90%] max-w-[600px] rounded-xl overflow-y-auto max-h-[90vh] relative"
          >
            <button
              onMouseEnter={() => setBtnHover(true)}
              onMouseLeave={() => setBtnHover(false)}
              style={{
                backgroundColor: btnHover ? '#FF0000' : 'transparent',
                color: btnHover ? '#050e2d' : '#050e2d',
                // border: '1px solid #FF0000',
              }}
              className="absolute top-1 right-2 !px-2 py-2 text-black text-xl z-10 hover:bg-red hover:text-black"
              onClick={() => setSelectedProject(null)}
            >
              ✕
            </button>

            <div className="!p-6 flex flex-col space-y-4">
              <img
                src={selectedProject.image}
                alt={selectedProject.name}
                className="w-full max-h-[300px] object-contain rounded-lg border"
              />
              <div className="!mt-5 !ml-3">
              <h3 className="text-black font-bold text-2xl">
                {selectedProject.name}
              </h3>

              <p className="text-gray-700 !mb-3">
                {selectedProject.description}
              </p>
                {selectedProject.Link && selectedProject.Link.trim() !== "" && (
                  <p className="text-black">
                    Project link:{" "}
                    <a
                      href={selectedProject.Link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline hover:text-blue-800"
                    >
                      {selectedProject.Link}
                    </a>
                  </p>
                )}


              <div className="flex flex-wrap gap-3">
                {selectedProject.tags.map((tag) => (
                  <span key={tag.name} className={`text-sm ${tag.color}`}>
                    #{tag.name}
                  </span>
                ))}
              </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}

    </>
  );
};

export default Works;
