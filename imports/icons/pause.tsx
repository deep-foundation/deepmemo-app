import { memo } from 'react';
import { motion } from 'framer-motion';
import { useColorMode } from '@chakra-ui/react';

const transition = {
  type: 'tween',
  duration: 0.9,
};
export const Pause = memo(() => {
  const { colorMode } = useColorMode();
  return (<motion.svg width="19" height="24" viewBox="0 0 19 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <motion.rect 
        transition={transition}
          initial={{ 
            pathLength: 0,
          }}
          animate={{
            pathLength: 1.1,
          }}
        x="0.5" y="0.5" width="7" height="23" rx="3.5" stroke={colorMode == 'light' ? '#060608' : '#83cfff'}
      />
      <motion.rect 
        transition={transition}
          initial={{ 
            pathLength: 0,
          }}
          animate={{
            pathLength: 1.1,
          }}
        x="11.5" y="0.5" width="7" height="23" rx="3.5" stroke={colorMode == 'light' ? '#060608' : '#83cfff'} 
      />
    </motion.svg>
  )
})