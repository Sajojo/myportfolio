// eslint-disable-next-line no-unused-vars
import { motion, useAnimationControls } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const Warm = () => {
  const controls = useAnimationControls();
  const handleClick = () => {
    controls.start("close");
  };
  return (
    <motion.div
      whileInView={{
        opacity: 0,
        transition: { delay: 8, duration: 1 },
        transitionEnd: { display: "none" },
      }}
      variants={{
        initial: { opacity: 1 },
        close: {
          opacity: 0,
          transition: {
            duration: 1,
          },
        },
      }}
      initial="initial"
      animate={controls}
      id="warm"
      className="h-screen w-screen flex flex-col justify-center items-center bg-[#FFF8F0] fixed z-100"
    >
      <h1 className="text-4xl mb-20 sm:text-8xl">
        {" "}
        <span style={{ color: "#111D4A", fontWeight: "bold" }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={["This is Hello", "This is Welcome", "This is Jo"]}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </h1>
      <button
        onClick={handleClick}
        className="fixed bottom-5 flex flex-row justify-center items-center hover:underline hover:underline-offset-4 hover:cursor-pointer text-1xl sm:text-2xl"
      >
        Skip <MdOutlineKeyboardDoubleArrowRight />
      </button>
    </motion.div>
  );
};

export { Warm };
