import { Box } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import React, { memo, useState } from "react";

const transition = {
  x: { type: "spring", stiffness: 300, damping: 30 },
  opacity: { duration: 0.2 },
  display: { delay: 0.3 }
}
export const variantsSliding = {
  show: {
    x: '0%',
    opacity: 1,
    display: 'flex',
    transition: transition
    },
  hide: {
    x: '-100%',
    opacity: 0,
    display: 'none',
    transition: transition
  },
}
// export const variantsSliding = {
//   enter: (direction: number) => {
//     return {
//       x: direction > 0 ? 1000 : -1000,
//       opacity: 0
//     };
//   },
//   center: {
//     zIndex: 1,
//     x: 0,
//     opacity: 1
//   },
//   exit: (direction: number) => {
//     return {
//       zIndex: 0,
//       x: direction < 0 ? 1000 : -1000,
//       opacity: 0
//     };
//   }
// }

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