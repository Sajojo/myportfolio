import { React } from "react";
// eslint-disable-next-line no-unused-vars
import {
  motion,
  useInView,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";

const About = () => {
  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log(latest);
  });
  return (
    <>
      <div className="flex flex-col items-center h-[600vh]">
        <span className="sticky top-0 flex justify-center w-full bg-[#1E1E24] ">
          <h2 className=" text-[#FFF] font-bold p-10 pr-12 text-5xl">
            This is Me
          </h2>
        </span>
        <motion.div
          style={{}}
          className="sticky top-[128px] w-screen flex align-center justify-center"
        >
          <motion.img
            src={"/openEyes.png"}
            alt="openEyesChingChong"
            className="absolute z-[-10] sm:w-[70%]"
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
              once: true,
            }}
          />
          <motion.img
            src={"/closedEyes.png"}
            alt="openEyesChingChong"
            className="absolute z-[-20] sm:w-[70%]"
          />
        </motion.div>
        <div>
          <h1 className>ClASS ACTION</h1>
        </div>
      </div>
    </>
  );
};

export default About;
