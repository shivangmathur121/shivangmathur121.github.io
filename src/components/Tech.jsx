import React from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { AnimatePresence } from "framer-motion";

const Tech = () => {
  return (
    <AnimatePresence>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((tech) => (
          <div className="w-28 h-28" key={tech.name}>
            <BallCanvas icon={tech.icon} />
          </div>
        ))}
      </div>
    </AnimatePresence>
  );
};

export default SectionWrapper(Tech, "");
