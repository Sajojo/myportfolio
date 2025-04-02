// eslint-disable-next-line no-unused-vars
import { motion, useAnimationControls } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Warm = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/home");
    }, 9000);
  });
  return (
    <>
      <motion.div
        variants={{
          initial: { opacity: 1 },
          close: {
            opacity: 0,
            transition: { delay: 9, duration: 1 },
          },
        }}
        initial="initial"
        animate="close"
        id="warm"
        className="h-screen w-screen flex flex-col justify-center items-center bg-[#FFF8F0] fixed z-100"
      >
        <h1 className="text-4xl mb-20 sm:text-8xl">
          {" "}
          <span style={{ color: "#111D4A", fontWeight: "bold" }}>
            {/* Style will be inherited from the parent element */}
            <Typewriter
              words={["Welcome", "欢迎光临", "Selamat Datang"]}
              cursor
              cursorStyle="_"
              typeSpeed={100}
              deleteSpeed={120}
              delaySpeed={1500}
            />
          </span>
        </h1>
        <button
          onClick={() => navigate("/home")}
          className="fixed bottom-5 flex text-[#111D4A] flex-row justify-center items-center hover:underline hover:underline-offset-4 cursor-pointer text-1xl sm:text-2xl"
        >
          Skip <MdOutlineKeyboardDoubleArrowRight />
        </button>
      </motion.div>
      <div className="bg-[#1E1E24] h-screen w-screen fixed top-0 z-10"></div>
    </>
  );
};

export default Warm;
