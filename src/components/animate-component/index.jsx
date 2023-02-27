import { motion, MotionConfig } from "framer-motion";

const Animated = ({ animateConfig, children }) => {
  const { initial, whileInView } = animateConfig;

  return (
    <MotionConfig transition={{ duration: 1 }}>
      <motion.div
        initial={initial}
        whileInView={whileInView}
        viewport={{ once: true }}
      >
        {children}
      </motion.div>
    </MotionConfig>
  );
};

export default Animated;
