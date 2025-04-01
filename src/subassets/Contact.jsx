import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="flex flex-col gap-20 justify-center items-center h-screen w-screen bg-[#1E1E24] sticky top-0 z-50">
      <span>
        <motion.h1
        initial={{opacity:0}} className="text-[#FFF8F0] font-black text-3xl">
          This is more about me
        </motion.h1>
      </span>
      <div className="flex flex-col gap-5 pl-[5%] pr-[5%]">
      <div className="flex items-start gap-2.5 ">
      <img className="w-8 h-8 rounded-full" src="./Jo.jpeg" alt="Jo's image" />
        <div className="flex flex-col w-[70%] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <span className="text-sm font-semibold text-[#FFCF99] mr-0">Paojo</span><span className="text-sm font-semibold text-[#FFF8F0]">#2803</span>
            <span className="text-sm font-normal text-gray-500 dark:text-gray-400">08:08</span>
          </div>
          <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">This website? It was made to showcase what I can do 😅</p>
          <span className="text-sm font-normal text-gray-500 dark:text-gray-400">Read</span>
        </div>
        </div>
        
        <div className="flex justify-end items-start gap-2.5">
        <div className="flex flex-col w-[70%] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-ee-xl rounded-s-xl dark:bg-gray-700">
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
          <span className="text-sm font-semibold text-[#FFCF99] mr-0">RDJ</span><span className="text-sm font-semibold text-[#FFF8F0]">#2008</span>
          <span className="text-sm font-normal text-gray-500 dark:text-gray-400">08:24</span>
          </div>
          <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">This website fire frfr 🔥🔥🔥</p>
          <span className="text-sm font-normal text-gray-500 dark:text-gray-400">Delivered</span>
        </div>
        
      <img className="w-8 h-8 rounded-full" src="./rdj.png" alt="RDJ image" />
        </div>
        </div>
        <div className="flex flex-col">
          <span>//Jo is a bla bla bla...</span>
          <span>
            //LinkedIn Gmail Whatsapp
          </span>
    
    </div>
    </div>
  );
};

export default Contact;
