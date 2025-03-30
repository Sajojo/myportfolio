import { React } from "react";
import { Typewriter } from "react-simple-typewriter";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Intro = () => {
  return (
    <>
      <div className="flex justify-center items-center flex-col">
        <h1 className="p-10 pt-0 pr-12 text-5xl sm:pt-10">
          {" "}
          <span style={{ color: "#FFF", fontWeight: "bold" }}>
            {/* Style will be inherited from the parent element */}
            <Typewriter
              words={["Hi there...", "I'm Jo", "How well do you know me?"]}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h1>
        <motion.div
          className="flex flex-col p-5 gap-10 text-2xl text-[#FFCF99] md:gap-10 md:flex-row lg:gap-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 6.5, duration: 3 }}
        >
          <a
            href="/#work"
            className="p-4 border-4 rounded-2xl hover:scale-120 hover:text-[#FFF] hover:transition-transform transition duration-200"
          >
            <strong>What</strong> I do
          </a>
          <a
            href="/#about"
            className="p-4 border-4 rounded-2xl hover:scale-120 hover:text-[#FFF] hover:transition-transform transition duration-200"
          >
            <strong>Who</strong> I am
          </a>
          <a
            href="#ctc"
            className="p-4 border-4 rounded-2xl hover:scale-120 hover:text-[#FFF] hover:transition-transform transition duration-200"
          >
            <strong>How</strong> to find me
          </a>
        </motion.div>
      </div>
    </>
  );
};

export default Intro;
