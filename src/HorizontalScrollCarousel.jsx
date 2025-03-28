// eslint-disable-next-line no-unused-vars
import { motion, useTransform, useScroll, useInView } from "framer-motion";
import { useRef } from "react";
import Intro from "./subassets/Intro";
import About from "./subassets/About";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

const Hsc = () => {
  return (
    <>
      <section className="bg-[#1E1E24] relative z-[10]">
        <div className="flex h-screen items-start pt-[17%] sm:pt-0 sm:items-center justify-center">
          <Intro />
        </div>
      </section>
      <section id="work">
        <HorizontalScrollCarousel />
      </section>
      <div className="h-[250vh] bg-none"></div>
      <section id="about" className="bg-[#1E1E24] relative z-[10]">
        <div className="flex items-start justify-center">
          <About />
        </div>
      </section>
    </>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-220%"]);

  return (
    <div className="fixed top-0 z-[1]">
      <section ref={targetRef} className="relative h-[400vh] bg-[#FFCF99]">
        <div className="h-screen flex items-center justify-center">
          <h2 className="fixed left-0 w-[25%] text-[#000] font-bold text-8xl sm:text-9xl">
            This is my work
          </h2>

          <div className="fixed right-15 sm:left-15">
            <span className="flex flex-col justify-center items-center">
              <p>Scroll Down</p>
              <motion.div
                animate={{
                  translateY: [10, 7, 5, 1, 5, 7, 10],
                }}
                transition={{
                  duration: 1,

                  repeat: Infinity,
                }}
              >
                <MdKeyboardDoubleArrowDown className="size-10" />
              </motion.div>
            </span>
          </div>
          <motion.div
            style={{ x }}
            className="flex items-center ml-[162%] sm:ml-[190%] gap-12 bg-[#FFCF99]"
          >
            {cards.map((card) => {
              return <Card card={card} key={card.id} />;
            })}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

const Card = ({ card }) => {
  return (
    <section className="border-8 border-white">
      <div
        key={card.id}
        className="group relative h-[350px] w-[350px] sm:h-[450px] sm:w-[450px] overflow-hidden bg-neutral-200"
      >
        <div
          style={{
            backgroundImage: `url(${card.url})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
        ></div>
      </div>
      <div className="">
        <p className="bg-[#FFF] p-4 text-base sm:p-6 sm:text-2xl italic text-[#111D4A] w-full">
          {card.title}
        </p>
      </div>
    </section>
  );
};

export default Hsc;

const cards = [
  {
    url: "carouselStuff/hands.jpg",
    title: `"Baby I'm yours - Arctic Monkeys"`,
    id: 3,
  },
  {
    url: "carouselStuff/night.jpg",
    title: "Bustling city",
    id: 4,
  },
  {
    url: "carouselStuff/bird.jpg",
    title: "Tokyo drama",
    id: 5,
  },
  {
    url: "carouselStuff/bicycleLady.jpg",
    title: "Bicycle Lady",
    id: 6,
  },
  {
    url: "carouselStuff/oldLady.jpg",
    title: "Sweet old lady",
    id: 7,
  },
];
