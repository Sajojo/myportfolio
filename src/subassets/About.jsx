import { React } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, useInView } from "framer-motion";

const About = () => {
  return (
    <>
      <div className="flex flex-col items-center h-[300vh]">
        <span className="sticky top-0 w-full bg-[#1E1E24] ">
          <h2 className=" text-[#FFF] font-bold p-10 pr-12 text-5xl">
            This is Me
          </h2>
        </span>
        <motion.img
          src={"/openEyes.png"}
          alt="openEyesChingChong"
          className=""
        />
      </div>
    </>
  );
};

export default About;
