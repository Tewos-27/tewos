import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const CV_FILE_PATH = 'Tewodros_Shimels.pdf';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          option={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  const handleDownloadCV = () => {
    try {
      const link = document.createElement('a');
      link.href = CV_FILE_PATH;
      link.download = 'Tewodros_Shimels.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Show success toast
      toast.success('CV download started!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (error) {
      // Show error toast if download fails
      toast.error('Failed to download CV. Please try again.', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      console.error('Download error:', error);
    }
  };

  return (
    <>
      {/* Add ToastContainer at the root of your component */}
      <ToastContainer 
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText} id='about'>
          Introduction
        </p>
        <h2 className={styles.sectionHeadText}>
          Overview.
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn(", ", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Hi, my name is Tewodros Shimels, and I am a passionate Full-Stack Developer with expertise in both front-end and back-end technologies. I have a strong foundation in TypeScript and JavaScript, along with proficiency in modern frameworks and libraries, including React.js, Next.js, Node.js, and Express.js.

        On the front-end, I specialize in building dynamic, high-performance user interfaces using React.js, Next.js, Tailwind CSS, and Framer Motion—ensuring visually engaging and seamless user experiences. On the back-end, I develop scalable and efficient server-side applications with Node.js, Express.js, and MongoDB.

        I am a quick learner who thrives in collaborative environments, working closely with clients to deliver efficient, user-friendly, and scalable solutions tailored to real-world challenges. Whether it's crafting intuitive UI/UX, optimizing API performance, or integrating complex functionalities, I am committed to building high-quality software solutions.

        🚀 Let's work together to bring your ideas to life!
      </motion.p>

      <motion.div
        variants={fadeIn("", "", 0.2, 1)}
        className="mt-6"
      >
        <button
          onClick={handleDownloadCV}
          className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl hover:bg-[#2a2a72] transition-colors duration-300"
        >
          Download CV
        </button>
      </motion.div>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");