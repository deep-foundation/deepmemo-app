import { extendTheme, type ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: true,
  cssVarPrefix: 'deepMemo',
}

const themeChakra = extendTheme({ 
  config,
  semanticTokens: {
    fontSizes: {
      xxs: '0.55rem',
    },
    colors: {
      error: 'red.500',
      lightBg: '#83cfff',
      darkBg: '#060608',
      lightTxt: '#DADADA',
      darkTxt: '#29292f',
      discord: '#5562ea',
      text: {
        default: 'darkTxt',
        _dark: 'lightTxt',
      },
      bg: {
        default: 'lightBg', 
        _dark: 'darkBg',
      }
    },
    
  },
  styles: {
    global: () => ({
      body: {
        bg: 'bg',
        color: 'text',
        lineHeight: 'base',
      },
    }),
  },
  fonts: {
    body: `'Jost', sans-serif`,
  },
  colors: {
    
  },
  space: {
    4.5: '1.125rem',
  },
  textStyles: {
    smallText: {
      color: 'text',
      fontWeight: 'light',
      fontSize: '0.8rem',
    },
    h1: {
      fontSize: '2.25rem',
      fontWeight: 'semibold',
      lineHeight: '110%',
      letterSpacing: '-1%',
    },
    h3: {
      fontSize: '1.5rem',
      fontWeight: 'semibold',
      lineHeight: '110%',
      letterSpacing: '-1%',
    },
  },
  components: {
    Button: {
      variants: {
        unstyled: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1rem 0',
        },
      },
    },
  }
})

export default themeChakra