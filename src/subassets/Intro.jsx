import { React } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Intro = () => {
  return (
    <>
      <div className="flex justify-center items-center flex-col">
        <div className="flex flex-col p-5 gap-10 text-2xl text-[#FFCF99] md:gap-10 md:flex-row lg:gap-20">
          <a
            href="/#work"
            className="p-4 border-4 rounded-2xl hover:scale-120 hover:text-[#FFF] hover:transition-transform transition duration-200 text-center"
          >
            <strong>This</strong> is my work
          </a>
          <a
            href="/#about"
            className="p-4 border-4 rounded-2xl hover:scale-120 hover:text-[#FFF] hover:transition-transform transition duration-200 text-center"
          >
            <strong>This</strong> is me
          </a>
          <a
            href="#ctc"
            className="p-4 border-4 rounded-2xl hover:scale-120 hover:text-[#FFF] hover:transition-transform transition duration-200 text-center"
          >
            <strong>This</strong> to find me
          </a>
        </div>
      </div>
    </>
  );
};

export default Intro;
