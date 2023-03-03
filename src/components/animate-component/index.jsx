import { motion, MotionConfig } from "framer-motion";

const Animated = ({ animateConfig, children }) => {
  return (
    <MotionConfig transition={{ duration: 1 }}>
      <motion.div {...animateConfig} viewport={{ once: true }}>
        {children}
      </motion.div>
    </MotionConfig>
  );
};

export default Animated;
