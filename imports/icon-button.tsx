import { Box } from '@chakra-ui/react';
import React, { memo, FC } from 'react';

interface IconButtonProps {
  children: React.ReactNode;
  ariaLabel: string;
  onClick: () => void;
}

export const IconButton: FC<IconButtonProps> = memo(({ children, ariaLabel, onClick }) => {
  return <Box
      role='button'
      aria-label={ariaLabel}
      onClick={onClick}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '2.5rem',
        height: '2.5rem',
        borderRadius: '1.5rem',
        borderColor: 'bgRevert',
        borderWidth: '1px',
        bg: 'bg',
        _active: {
          borderColor: 'unset',
          borderWidth: '0px',
          bg: 'transparent',
          boxShadow: '2px 2px 3px #83cfff5e, -2px -2px 0px #63b3ed',
        },
        _hover: {
          borderColor: 'unset',
          borderWidth: '0px',
          bg: 'transparent',
          boxShadow: '2px 2px 3px #83cfff5e, -2px -2px 0px #63b3ed',
        },
        _focus: {
          borderColor: 'unset',
          borderWidth: '0px',
          bg: 'transparent',
          boxShadow: '2px 2px 0px #b8b8b8, -2px -2px 0px #ffffff',
        },
        _disabled: {
          bg: 'lightBg',
        },
      }}
    >
    {children}
  </Box>
})