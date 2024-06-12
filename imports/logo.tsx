import { memo } from 'react';
import { motion } from 'framer-motion';
import { Box, useColorMode } from '@chakra-ui/react';

const transition = {
  type: 'tween',
  duration: 2.9,
  fillOpacity: { delay: 2.3, duration: 0.25, ease: [0.43, 0.13, 0.23, 0.96] },
};
export const Logo = memo(() => {
  const { colorMode } = useColorMode();
  return (<Box sx={{width: "max-content", height: "max-content", position: "relative", display: "flex", justifyContent: "center", alignItems: "center"}}>
      <motion.svg width="114" height="114" viewBox="0 0 114 114" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.path 
          transition={transition}
          initial={{ 
            pathLength: 0,
            fillOpacity: 0,
          }}
          animate={{
            pathLength: 1.1,
            fillOpacity: 1,
          }}
          d="M51.0371 1.02071C47.0831 1.20011 31.5789 2.87427 16.2466 17.7655C15.8396 18.1608 15.8462 18.822 16.2625 19.2074L28.324 30.3755C28.706 30.7291 29.293 30.7346 29.6842 30.3911C31.3313 28.945 35.6928 25.2504 39.9009 22.8367C40.2599 22.6308 40.4639 22.2306 40.4092 21.8203L39.5943 15.7088C39.5379 15.2856 39.7534 14.8707 40.1474 14.7061C43.4519 13.3256 48.8937 12.7526 51.064 12.5711C51.5916 12.5269 52 12.088 52 11.5585V1.97472C52 1.43296 51.5783 0.996156 51.0371 1.02071Z" 
          fill={colorMode == 'light' ? '#060608' : '#83cfff'} 
          stroke={colorMode == 'light' ? '#060608' : '#83cfff'} 
          strokeWidth="2"
        />
        <motion.path 
          transition={transition}
          initial={{ 
            pathLength: 0,
            fillOpacity: 0,
          }}
          animate={{
            pathLength: 1.1,
            fillOpacity: 1,
          }}
          d="M50.5371 110.982C46.5831 110.803 31.0789 109.128 15.7466 94.2372C15.3396 93.8419 15.3462 93.1808 15.7625 92.7953L27.824 81.6273C28.206 81.2736 28.793 81.2682 29.1842 81.6116C30.8313 83.0577 35.1928 86.7524 39.4009 89.166C39.7599 89.372 39.9639 89.7722 39.9092 90.1824L39.0943 96.294C39.0379 96.7172 39.2534 97.1321 39.6474 97.2966C42.9519 98.6771 48.3937 99.2501 50.564 99.4317C51.0916 99.4759 51.5 99.9148 51.5 100.444V110.028C51.5 110.57 51.0783 111.007 50.5371 110.982Z" 
          fill={colorMode == 'light' ? '#060608' : '#83cfff'} 
          stroke={colorMode == 'light' ? '#060608' : '#83cfff'} 
          strokeWidth="2"
        />
        <motion.path 
          transition={transition}
          initial={{ 
            pathLength: 0,
            fillOpacity: 0,
          }}
          animate={{
            pathLength: 1.1,
            fillOpacity: 1,
          }}
          d="M60.9629 1.0221C64.9169 1.2015 80.4211 2.87565 95.7534 17.7669C96.1604 18.1622 96.1538 18.8233 95.7375 19.2088L83.676 30.3768C83.294 30.7305 82.707 30.736 82.3158 30.3925C80.6687 28.9464 76.3072 25.2518 72.0991 22.8381C71.7401 22.6322 71.5361 22.232 71.5908 21.8217L72.4057 15.7102C72.4621 15.2869 72.2466 14.8721 71.8526 14.7075C68.5481 13.327 63.1063 12.754 60.936 12.5724C60.4084 12.5283 60 12.0893 60 11.5599V1.97611C60 1.43435 60.4217 0.997542 60.9629 1.0221Z" 
          fill={colorMode == 'light' ? '#060608' : '#83cfff'} 
          stroke={colorMode == 'light' ? '#060608' : '#83cfff'} 
          strokeWidth="2"
        />
        <motion.path 
          transition={transition}
          initial={{ 
            pathLength: 0,
            fillOpacity: 0,
          }}
          animate={{
            pathLength: 1.1,
            fillOpacity: 1,
          }}
          d="M61.4629 110.983C65.4169 110.804 80.9211 109.13 96.2534 94.2386C96.6604 93.8433 96.6538 93.1822 96.2375 92.7967L84.176 81.6287C83.794 81.275 83.207 81.2696 82.8158 81.613C81.1687 83.0591 76.8072 86.7538 72.5991 89.1674C72.2401 89.3734 72.0361 89.7735 72.0908 90.1838L72.9057 96.2953C72.9621 96.7186 72.7466 97.1334 72.3526 97.298C69.0481 98.6785 63.6063 99.2515 61.436 99.4331C60.9084 99.4772 60.5 99.9162 60.5 100.446V110.029C60.5 110.571 60.9217 111.008 61.4629 110.983Z" 
          fill={colorMode == 'light' ? '#060608' : '#83cfff'} 
          stroke={colorMode == 'light' ? '#060608' : '#83cfff'} 
          strokeWidth="2"
        />
        <motion.path 
          transition={transition}
          initial={{ 
            pathLength: 0,
            fillOpacity: 0,
          }}
          animate={{
            pathLength: 1.1,
            fillOpacity: 1,
          }}
          d="M17.1802 53.5014H2.0666C1.48898 53.5014 1.03099 53.0102 1.07739 52.4344C2.1768 38.7948 7.13261 29.9725 9.82983 25.9675C10.175 25.4549 10.8978 25.3991 11.3347 25.8361L16.4666 30.968C16.7823 31.2837 16.8481 31.7692 16.6488 32.1687C14.9507 35.5728 14.295 39.5906 14.0849 41.2384C14.0276 41.6881 14.2971 42.1075 14.7241 42.26L19.9372 44.1218C20.5023 44.3236 20.7629 44.9739 20.5193 45.5223C19.2848 48.3009 18.504 51.3056 18.1769 52.7029C18.0682 53.167 17.6569 53.5014 17.1802 53.5014Z" 
          fill={colorMode == 'light' ? '#060608' : '#83cfff'} 
          stroke={colorMode == 'light' ? '#060608' : '#83cfff'} 
          strokeWidth="2"
        />
        <motion.path 
          transition={transition}
          initial={{ 
            pathLength: 0,
            fillOpacity: 0,
          }}
          animate={{
            pathLength: 1.1,
            fillOpacity: 1,
          }}
          d="M17.1802 59.0014H2.0666C1.48898 59.0014 1.03099 59.4926 1.07739 60.0683C2.1768 73.7079 7.13261 82.5303 9.82983 86.5353C10.175 87.0478 10.8978 87.1036 11.3347 86.6667L16.4666 81.5347C16.7823 81.219 16.8481 80.7336 16.6488 80.334C14.9507 76.93 14.295 72.9122 14.0849 71.2644C14.0276 70.8147 14.2971 70.3953 14.7241 70.2428L19.9372 68.3809C20.5023 68.1791 20.7629 67.5288 20.5193 66.9805C19.2848 64.2018 18.504 61.1971 18.1769 59.7999C18.0682 59.3357 17.6569 59.0014 17.1802 59.0014Z" 
          fill={colorMode == 'light' ? '#060608' : '#83cfff'} 
          stroke={colorMode == 'light' ? '#060608' : '#83cfff'} 
          strokeWidth="2"
        />
        <motion.path 
          transition={transition}
          initial={{ 
            pathLength: 0,
            fillOpacity: 0,
          }}
          animate={{
            pathLength: 1.1,
            fillOpacity: 1,
          }}
          d="M94.8198 53.5014H109.933C110.511 53.5014 110.969 53.0102 110.923 52.4344C109.823 38.7948 104.867 29.9725 102.17 25.9675C101.825 25.4549 101.102 25.3991 100.665 25.8361L95.5334 30.968C95.2177 31.2837 95.1519 31.7692 95.3512 32.1687C97.0493 35.5728 97.705 39.5906 97.9151 41.2384C97.9724 41.6881 97.7029 42.1075 97.2759 42.26L92.0628 44.1218C91.4977 44.3236 91.2371 44.9739 91.4807 45.5223C92.7152 48.3009 93.496 51.3056 93.8231 52.7029C93.9318 53.167 94.3431 53.5014 94.8198 53.5014Z" 
          fill={colorMode == 'light' ? '#060608' : '#83cfff'} 
          stroke={colorMode == 'light' ? '#060608' : '#83cfff'} 
          strokeWidth="2"
        />
        <motion.path 
          transition={transition}
          initial={{ 
            pathLength: 0,
            fillOpacity: 0,
          }}
          animate={{
            pathLength: 1.1,
            fillOpacity: 1,
          }}
          d="M94.8198 59.0014H109.933C110.511 59.0014 110.969 59.4926 110.923 60.0683C109.823 73.7079 104.867 82.5303 102.17 86.5353C101.825 87.0478 101.102 87.1036 100.665 86.6667L95.5334 81.5347C95.2177 81.219 95.1519 80.7336 95.3512 80.334C97.0493 76.93 97.705 72.9122 97.9151 71.2644C97.9724 70.8147 97.7029 70.3953 97.2759 70.2428L92.0628 68.3809C91.4977 68.1791 91.2371 67.5288 91.4807 66.9805C92.7152 64.2018 93.496 61.1971 93.8231 59.7999C93.9318 59.3357 94.3431 59.0014 94.8198 59.0014Z" 
          fill={colorMode == 'light' ? '#060608' : '#83cfff'} 
          stroke={colorMode == 'light' ? '#060608' : '#83cfff'} 
          strokeWidth="2"
        />
        <motion.circle  r="7.5"
          cx="56.5" cy="56.5014"
          transition={transition}
          fill={colorMode == 'light' ? '#060608' : '#83cfff'} 
          strokeDasharray="0 1"
          initial={{
            r: 0,
          }}
          animate={{
            r: 7.5
          }}
        />
        <motion.path 
          d="M57 31.0014C43.5 31.0014 31 41.9154 31 56.0014C31 70.0874 43.5 81.0014 57 81.0014C70.5 81.0014 81 69.5352 81 56.0014C81 42.4676 70.5 31.0014 57 31.0014Z" 
          stroke={colorMode == 'light' ? '#060608' : '#83cfff'} 
          transition={transition}
          strokeDasharray="0 1"
          initial={{
            pathLength: 0, 
            strokeWidth: 0
          }}
          animate={{
            pathLength: 1.1,
            strokeWidth: 11
          }}
        />
      </motion.svg>
      <Box 
        as={motion.div}
        initial={{
          width: "0%",
          opacity: 0,
        }}
        animate={{
          width: "75%",
          opacity: 1,
          transition: {
            delay: 2.5,
            duration: 0.5,
            ease: [0.43, 0.13, 0.23, 0.96]
          }
        }}
        pos="absolute"
        top="0"
        left="50%"
        h="100%"
        sx={{
          borderRadius: "50%",
          transform: 'rotateX(83deg) translateX(-50%) translateY(337%)',
          boxShadow: '-1px 184px 13px 0px #558bbd'
        }}
      />
    </Box>
  )
})