// eslint-disable-next-line no-unused-vars
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    /**/
    <div className="h-screen w-screen bg-[#111D4A] sticky top-0 z-50 overflow-hidden ">
      <div className="flex flex-col gap-20 justify-center items-center h-screen w-screen bg-[#1E1E24] sticky top-0 z-50">
        <span>
          <motion.h1
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { duration: 1 },
            }}
            className="text-[#FFF8F0] font-black text-3xl sm:text-5xl"
          >
            My Contacts
          </motion.h1>
        </span>
        <div className="flex flex-col gap-5 pl-[5%] pr-[5%]">
          <div className="flex items-start gap-2.5 ">
            <img
              className="w-8 h-8 rounded-full"
              src="./jo.jpeg"
              alt="Jo's images here"
            />
            <div
              ref={ref}
              style={{
                transform: isInView ? "none" : "translateY(200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              }}
              className="flex flex-col w-[70%] leading-1.5 p-4 rounded-e-xl rounded-es-xl bg-gray-700"
            >
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <span className="text-sm font-semibold text-[#FFCF99] mr-0">
                  Paojo
                </span>
                <span className="text-sm font-semibold text-[#FFF8F0]">
                  #2803
                </span>
                <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                  08:08
                </span>
              </div>
              <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">
                This website? It was made to showcase what I can do 😅
              </p>
              <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                Seen
              </span>
            </div>
          </div>
          <div className="flex justify-end items-start gap-2.5">
            <div
              ref={ref}
              style={{
                transform: isInView ? "none" : "translateY(200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 1.5s",
              }}
              className="flex flex-col w-[70%] leading-1.5 p-4 rounded-ee-xl rounded-s-xl bg-gray-700"
            >
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <span className="text-sm font-semibold text-[#FFCF99] mr-0">
                  RDJ
                </span>
                <span className="text-sm font-semibold text-[#FFF8F0]">
                  #2008
                </span>
                <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                  08:24
                </span>
              </div>
              <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">
                This website is awesome. Where can I find you?
              </p>
              <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                Seen
              </span>
            </div>
            <img
              className="w-8 h-8 rounded-full"
              src="./rdj.jpeg"
              alt="RDJ image"
            />
          </div>
          <div className="flex items-start gap-2.5 ">
            <img
              className="w-8 h-8 rounded-full"
              src="./jo.jpeg"
              alt="Jo's image"
            />
            <div
              ref={ref}
              style={{
                transform: isInView ? "none" : "translateY(200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 2.5s",
              }}
              className="flex flex-col w-[70%] leading-1.5 p-4 rounded-e-xl rounded-es-xl bg-gray-700"
            >
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <span className="text-sm font-semibold text-[#FFCF99] mr-0">
                  Paojo
                </span>
                <span className="text-sm font-semibold text-[#FFF8F0]">
                  #2803
                </span>
                <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                  11:10
                </span>
              </div>
              <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">
                You can find me here!
              </p>
              <div className="flex flex-row w-full py-2.5 gap-10 justify-center items-center">
                <a
                  id="wrapctcs"
                  href="https://www.linkedin.com/in/jovian-tan/"
                  className="hover:scale-110 duration-200"
                >
                  <FaLinkedin id="ctcs" className="text-5xl text-[#FFCF99]" />
                </a>
                <a
                  id="wrapctcs"
                  href="mailto:jvn.tan@gmail.com"
                  className="hover:scale-110 duration-200"
                >
                  <SiGmail id="ctcs" className="text-5xl text-[#FFCF99]" />
                </a>
                <a
                  href="https://api.whatsapp.com/send?phone=6282210784739"
                  className="hover:scale-110 duration-200"
                >
                  <FaWhatsapp id="ctcs" className="text-5xl text-[#FFCF99] " />
                </a>
              </div>
              <span className="text-sm font-normal pt-2.5 text-gray-500 dark:text-gray-400">
                Delivered
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
