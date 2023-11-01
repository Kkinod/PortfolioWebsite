import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface IRevealAnimation {
  children: ReactNode;
  hiddenY?: number;
  axis?: 'x' | 'y';
}

export const RevealAnimation = ({
  children,
  hiddenY = -75,
  axis = 'y',
}: IRevealAnimation) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, [axis]: hiddenY },
        visible: { opacity: 1, [axis]: 0 },
      }}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.9, delay: 0.25 }}
    >
      {children}
    </motion.div>
  );
};
