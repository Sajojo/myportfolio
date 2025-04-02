import { FaCircleArrowUp } from "react-icons/fa6";
import { motion } from "framer-motion";

const ToTop = () => {
  return (
    <motion.a
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      href="#top"
      className="fixed bottom-5 right-5 text-4xl z-90"
    >
      <FaCircleArrowUp />
    </motion.a>
  );
};
export default ToTop;
