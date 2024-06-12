import React, { useEffect, useState, useContext } from 'react';
import { Box, Text } from '@chakra-ui/react';
import { motion, useAnimationControls, AnimatePresence } from 'framer-motion';
import { Logo } from './logo';
import { useAnimationContext } from '../src/context';
import { variantsSliding } from '../src/animation-variants';

export const StartPage = () => {
  const { state, onConnection } = useAnimationContext();
  const control = useAnimationControls();

  useEffect(() => {
    if (state === 'start') {
      control.start("show");
    } else {
      control.start("hide");
    }
  }, [control, state]);
  console.log('click', state);

  return (<AnimatePresence>
      <Box 
        key='0'
        as={motion.div} 
        onTapStart={(e) => {
          onConnection(); 
          console.log('tap', state);
        }} 
        onClick={() => {
          onConnection(); 
          console.log('click', state);
        }} 
        sx={{ 
          width: '100vw',
          height: '100vh',
          pos: 'relative',
          overflow: 'hidden', 
          alignItems: 'center', 
          justifyContent: 'center', 
          }}
        initial={{
          display: 'flex',
          opacity: 1,
          x: '0%'
        }}
        animate={control}
        variants={variantsSliding}
      >
        <Logo />
        <Box textStyle='smallText' sx={{ pos: 'absolute', bottom: 0 }}>Ⓒ Deep.Foundation</Box>
      </Box>
    </AnimatePresence>
  )
}