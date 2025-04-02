import { FaCircleArrowUp } from "react-icons/fa6";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const ToTopLight = () => {
  return (
    <motion.a
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      href="#top"
      className="fixed bottom-5 right-5 text-4xl text-[#FFCF99] z-80"
    >
      <FaCircleArrowUp />
    </motion.a>
  );
};
export default ToTopLight;
