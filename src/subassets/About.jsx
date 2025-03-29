import { React } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, useInView } from "framer-motion";

const About = () => {
  return (
    <>
      <div className="flex flex-col items-center h-[600vh]">
        <span className="sticky top-0 flex justify-center w-full bg-[#1E1E24] ">
          <h2 className=" text-[#FFF] font-bold p-10 pr-12 text-5xl">
            This is Me
          </h2>
        </span>
        <div className="relative w-screen">
          <motion.img
            src={"/openEyes.png"}
            alt="openEyesChingChong"
            className="absolute z-[-10]"
            initial={{
              opacity: 1,
            }}
            transition={{
              duration: 0.7,
            }}
            whileInView={{
              opacity: 0,
            }}
            viewport={{
              amount: 0.7,
            }}
          />
          <motion.img
            src={"/closedEyes.png"}
            alt="openEyesChingChong"
            className="absolute z-[-20]"
          />
        </div>
      </div>
    </>
  );
};

export default About;
