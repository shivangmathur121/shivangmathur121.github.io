import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { AnimatePresence, motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ title, iconbg, cn, icon, date, points }) => (
  <VerticalTimelineElement
    contentStyle={{ background: "#1d1836", color: "#fff" }}
    contentArrowStyle={{ borderRight: "7px solid #232631" }}
    date={date}
    iconStyle={{ background: iconbg }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img src={icon} alt={cn} className="w-[60%] h-[60%] object-contain" />
      </div>
    }
  >
    <div>
      <h3 className="text-white text-[24px] font-bold">{title}</h3>
      <p
        className="text-secondary text-[16px] font-semibold"
        style={{ margin: 0 }}
      >
        {cn}
      </p>
    </div>
    <ul className="mt-5 list-disc ml-5 space-y-2">
      {points.map((point, index) => (
        <li
          key={`experience-point-${index}`}
          className="text-white-100 text-[14px] pl-1 tracking-wider"
        >
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

const Experience = () => {
  return (
    <AnimatePresence>
      <>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What I have done so far</p>
          <h2 className={styles.sectionHeadText}>Experience</h2>
        </motion.div>
        <div className="mt-20 flex flex-col ">
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={index}
                title={experience.title}
                icon={experience.icon}
                iconbg={experience.iconBg}
                cn={experience.company_name}
                date={experience.date}
                points={experience.points}
              />
            ))}
          </VerticalTimeline>
        </div>
      </>
    </AnimatePresence>
  );
};

export default SectionWrapper(Experience, "experience");
