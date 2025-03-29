import { React } from "react";
import { Typewriter } from "react-simple-typewriter";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Intro = () => {
  return (
    <>
      <div className="flex justify-center items-center flex-col">
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
          className="flex p-5 gap-20 text-2xl text-[#FFCF99]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 5, duration: 5 }}
        >
          <a
            href="/#work"
            className="p-4 border-4 rounded-2xl hover:scale-120 hover:text-[#FFF] hover:transition-transform transition duration-200"
          >
            I know what you do
          </a>
          <a
            href="/#about"
            className="p-4 border-4 rounded-2xl hover:scale-120 hover:text-[#FFF] hover:transition-transform transition duration-200"
          >
            I know who you are
          </a>
          <a
            href="#ctc"
            className="p-4 border-4 rounded-2xl hover:scale-120 hover:text-[#FFF] hover:transition-transform transition duration-200"
          >
            I know how to find you
          </a>
        </motion.div>
      </div>
    </>
  );
};

export default Intro;
