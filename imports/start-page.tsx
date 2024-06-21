import React, { useEffect, useState, useContext } from 'react';
import { Box, Text, useColorMode } from '@chakra-ui/react';
import { motion, useAnimationControls, AnimatePresence } from 'framer-motion';
import { Logo } from './logo';
import { useAnimationContext } from '../src/context';
import { variantsSliding } from '../src/animation-variants';
import { openSync } from 'fs';


const transition = {
  type: "spring", stiffness: 300, damping: 30,
  duration: 1.5,
  display: { delay: 1.6 },
  opacity: {
    delay: 1.4,
    duration: 1,
    ease: "linear",
    type: "tween",
  }
}
const variants = {
  hide: (colorMode) => ({
    background: colorMode === 'dark'? ['#060608', '#83cfff', '#3d6b87'] : ['#83cfff', '#3d6b87', '#060608'],
    rotateY: [0, 180],
    display: 'none',
    opacity: 0,
    transition: transition
  })
}
export const StartPage = () => {
  const { state, onConnection } = useAnimationContext();
  const control = useAnimationControls();
  const { colorMode } = useColorMode();

  useEffect(() => {
    onConnection(); 
    if (state === 'connection') {
      control.start("hide");
      // control.start("show");
    } 
    // else {
    // }
  });

  return (<AnimatePresence>
      <Box 
        key='0'
        as={motion.div} 
        sx={{ 
          width: '100vw',
          height: '100vh',
          pos: 'relative',
          overflow: 'hidden', 
          alignItems: 'center', 
          justifyContent: 'center', 
          display: 'flex',
          backgroundColor: 'bg',
        }}
        initial={{
          display: 'flex',
          opacity: 1,
          rotateY: 0,
        }}
        custom={colorMode}
        animate={control}
        variants={variants}
      >
        <Logo />
        <Box textStyle='smallText' sx={{ pos: 'absolute', bottom: 0 }}>Ⓒ Deep.Foundation</Box>
      </Box>
    </AnimatePresence>
  )
}