import React from "react";
import { Tilt } from "react-tilt";
import { AnimatePresence, motion } from "framer-motion";
import { services } from "../constants";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 1)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 objec-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <AnimatePresence>
      <>
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText}`}>Introduction</p>
          <h2 className={`${styles.sectionHeadText}`}>Overview</h2>
        </motion.div>
        <motion.p variants={fadeIn("", "", 0.1, 1)}>
          As a high school senior, I'm passionate about programming and
          innovation. I'm the founder of Zod, a startup specializing in AI
          models for pentesting and cybersecurity. My journey in technology has
          been exhilarating, and I've honed my skills in programming,
          competitive coding, software development, and pentesting. I'm eager to
          pursue computer science, AI, and cybersecurity in my upcoming
          education. My ambition is to use these fields to drive innovation and
          make a significant impact on the world. The ever-evolving realm of
          computer science and the boundless potential of AI inspire me to shape
          the future through groundbreaking technology.
          <br />
          <br />
          WELCOME TO MY WORLD !
        </motion.p>
        <div className="mt-20 flex flex-wrap gap-10">
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
      </>
    </AnimatePresence>
  );
};

export default SectionWrapper(About, "about");
