import { memo } from 'react';
import { motion } from 'framer-motion';
import { useColorMode } from '@chakra-ui/react';

const transition = {
  type: 'tween',
  duration: 0.9,
  strokeOpacity: { delay: 2.3, duration: 0.25, ease: [0.43, 0.13, 0.23, 0.96] },
};
export const Play = memo(() => {
  const { colorMode } = useColorMode();
  return (<motion.svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
      <motion.path 
        transition={transition}
        initial={{ 
          pathLength: 0,
        }}
        animate={{
          pathLength: 1.1,
        }}
        d="M0.5 16.894V2.23607C0.5 1.121 1.67347 0.395752 2.67082 0.894428L18.0267 8.57239C19.1553 9.13668 19.1253 10.7574 17.9766 11.2796L2.6207 18.2595C1.62756 18.711 0.5 17.9849 0.5 16.894Z"
        // fill={colorMode == 'light' ? '#060608' : '#83cfff'} 
        stroke={colorMode == 'light' ? '#060608' : '#83cfff'} 
        strokeWidth="1"
      />
    </motion.svg>
  )
})