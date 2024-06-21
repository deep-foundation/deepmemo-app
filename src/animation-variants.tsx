import { Box, background } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import React, { memo, useState } from "react";

const transitionContent = {
  type: "spring", stiffness: 300, damping: 30, delay: 1.35, duration: 0.4
}
const transition = {
  type: "spring", stiffness: 300, damping: 30,
  duration: 1.5,
}
export const variantsSliding = {
  show: (mode) => ({
    background: mode === 'dark'? ['#3d6b87', '#83cfff', '#060608'] : ['#060608', '#3d6b87', '#83cfff'],
    rotateY: [180, 0],
    display: 'flex',
    transition: transition
  }),
  hide: (mode) => ({
    background: mode === 'dark'? ['#060608', '#83cfff', '#3d6b87'] : ['#83cfff', '#3d6b87', '#060608'],
    rotateY: [0, 180],
    display: 'none',
    transition: transition,
  }),
}
export const contentAnimation = {
  show: {
    opacity: [0.1, 0.5, 1],
    transition: transitionContent
  },
  hide: {
    opacity: 0,
    transition: transitionContent
  },
  
}

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

export const AnimationParent = memo((children: React.ReactNode) => {
  const [[page, direction], setPage] = useState([0, 0]);
  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };
  return (<AnimatePresence initial={false} custom={direction}>
      <Box
        as={motion.div}
        key={page}
        custom={direction}
        variants={variantsSliding}
        initial="enter"
        animate="center"
        exit="exit"
        // @ts-ignore
        transition={{
          x: { type: "spring", stiffness: 300, damping: 30 },
          opacity: { duration: 0.2 }
        }}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={1}
        onDragEnd={(e, { offset, velocity }) => {
          const swipe = swipePower(offset.x, velocity.x);
          if (swipe < -swipeConfidenceThreshold) {
            paginate(1);
          } else if (swipe > swipeConfidenceThreshold) {
            paginate(-1);
          }
        }}
      >{children}
      </Box>
    </AnimatePresence>
  )
})