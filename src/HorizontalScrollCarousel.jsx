// eslint-disable-next-line no-unused-vars
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import Intro from "./subassets/Intro";
import About from "./subassets/About";

const Hsc = () => {
  return (
    <>
      <section className="bg-[#1E1E24] relative z-[10]">
        <div className="flex h-screen items-center justify-center">
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

  const x = useTransform(scrollYProgress, [0, 1], ["20%", "-110%"]);

  return (
    <div className="fixed top-0 z-[1]">
      <section ref={targetRef} className="relative h-[400vh] bg-[#FFCF99]">
        <div className="flex h-screen items-center overflow-hidden">
          <motion.div style={{ x }} className="flex pl-[58%] gap-12">
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
    <section>
      <div
        key={card.id}
        className="group relative h-[250px] w-[250px] sm:h-[450px] sm:w-[450px] overflow-hidden bg-neutral-200"
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
        <p className="bg-[#FFF] mt-3 p-3 text-sm sm:mt-6 sm:p-6 sm:text-2xl italic text-[#111D4A] backdrop-blur-lg">
          {card.title}
        </p>
      </div>
    </section>
  );
};

export default Hsc;

const cards = [
  {
    url: "carouselStuff/car.jpg",
    title: '"tree hugger" - Filmore (Cars)',
    id: 1,
  },
  {
    url: "carouselStuff/yes.jpg",
    title: '"Yes"',
    id: 2,
  },
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
