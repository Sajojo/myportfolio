import { ReactLenis } from "lenis/dist/lenis-react";
import {
  // eslint-disable-next-line no-unused-vars
  motion,
  useMotionTemplate,
  useScroll,
  useMotionValueEvent,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

const About = () => {
  return (
    <div className="bg-[#1E1E24]">
      <ReactLenis
        root
        options={{
          // Learn more -> https://github.com/darkroomengineering/lenis?tab=readme-ov-file#instance-settings
          lerp: 0.3,
          //   infinite: true,
          //   syncTouch: true,
        }}
      >
        <Hero />
      </ReactLenis>
    </div>
  );
};
export default About;

const SECTION_HEIGHT = 1900;

const Hero = () => {
  return (
    <div
      style={{ height: `calc(${SECTION_HEIGHT}px + 180vh)` }}
      className="relative w-full"
    >
      <div className="flex sticky top-0 justify-center">
        <CenterImage />
      </div>

      <ParallaxImages />
    </div>
  );
};

const CenterImage = () => {
  const { scrollY } = useScroll();

  {
    /*useMotionValueEvent(scrollY, "change", (latest) => {
    console.log(latest);
  });*/
  }
  const clip1 = useTransform(scrollY, [2208, 5555], [25, 0]);
  const clip2 = useTransform(scrollY, [2208, 5555], [75, 100]);

  const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;

  const backgroundSize = useTransform(scrollY, [2208, 7500], ["170%", "240%"]);

  return (
    <motion.div
      className="flex justify-center items-center h-screen w-[100%] sm:w-[80%] md:w-[60%] bg-center"
      style={{
        clipPath,
        backgroundSize,
        backgroundImage: "url(./openEyes.png)",
        backgroundRepeat: "no-repeat",
        backgroundClip: "text",
        fontWeight: "900",
        color: "transparent",
      }}
    >
      <span className="flex flex-col leading-[0.65]">
        <span className="text-[45vw] tracking-[-0.12em] sm:text-[25vw] md:text-[25vw]">
          THIS
        </span>
        <span className="text-[70vw] sm:text-[45vw] md:text-[40vw]"> IS</span>
        <span className="text-[60vw] sm:text-[35vw] md:text-[30vw]">ME</span>
      </span>
    </motion.div>
  );
};

const ParallaxImages = () => {
  return (
    <div className="mx-auto max-w-5xl px-4 pt-[200px]">
      <ParallaxImg
        src="./parallaxStuff/camera3.JPG"
        alt="And example of a space launch"
        start={-200}
        end={200}
        className="ml-[2%] w-1/3 sm:ml-[-100px]"
      />
      <ParallaxImg
        src="./closedEyes.png"
        alt="Closed Eye Ching Chong"
        start={200}
        end={100}
        className="mx-25 w-2/3"
      />
      <ParallaxImg
        src="./parallaxStuff/camera2.png"
        alt="Orbiting satellite"
        start={250}
        end={50}
        className="ml-auto w-1/3 sm:ml-200"
      />
      <ParallaxImg
        src="./parallaxStuff/camera1.png"
        alt="Orbiting satellite"
        start={-150}
        end={500}
        className="ml-12 w-5/12"
      />
    </div>
  );
};

const ParallaxImg = ({ className, alt, src, start, end }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`${start}px end`, `end ${end * -1}px`],
  });

  const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);

  const y = useTransform(scrollYProgress, [0, 1], [start, end]);
  const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;

  return (
    <motion.img
      src={src}
      alt={alt}
      className={className}
      ref={ref}
      style={{ transform, opacity }}
    />
  );
};
