import { React } from "react";
import { Typewriter } from "react-simple-typewriter";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Intro = () => {
  return (
    <>
      <div className="flex justify-center items-center flex-col w-full">
        <h1 className="p-10 pr-12 text-5xl">
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
          transition={{ delay: 5, duration: 5 }}
        >
          <a
            href="/#work"
            className="p-4 border-4 rounded-2xl hover:scale-120 hover:text-[#FFF] hover:transition-transform transition duration-200"
          >
            I know <strong>What</strong> you do
          </a>
          <a
            href="/#about"
            className="p-4 border-4 rounded-2xl hover:scale-120 hover:text-[#FFF] hover:transition-transform transition duration-200"
          >
            I know <strong>Who</strong> you are
          </a>
          <a
            href="#ctc"
            className="p-4 border-4 rounded-2xl hover:scale-120 hover:text-[#FFF] hover:transition-transform transition duration-200"
          >
            I know <strong>How</strong> to find you
          </a>
        </motion.div>
      </div>
    </>
  );
};

export default Intro;
