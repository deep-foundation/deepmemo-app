import { IconButton, extendTheme, type ThemeConfig } from '@chakra-ui/react';
import type { StyleFunctionProps } from '@chakra-ui/styled-system';

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
      darkColor: '#060608',
      hoverLightBg: '#4f93be',
      hoverDarkColor: '#272755',
      lightTxt: '#DADADA',
      discord: '#5562ea',
      text: {
        default: 'darkColor',
        _dark: 'lightTxt',
      },
      bg: {
        default: 'lightBg', 
        _dark: 'darkColor',
      },
      bgRevert: {
        default: 'darkColor', 
        _dark: 'lightBg',
      },
      switchTrackChecked: {
        default: 'darkColor',
        _dark: 'lightBg',
      },
      switchTrackUnchecked: {
        default: 'lightBg',
        _dark: 'darkColor',
      },
      switchThumbUnchecked: {
        default: 'darkColor',
        _dark: 'lightBg',
      },
      switchThumbChecked: {
        default: 'lightBg',
        _dark: 'darkColor',
      },
      switchModeBorder: {
        default: 'darkColor',
        _dark: 'lightBg',
      },
    },
    
  },
  styles: {
    global: () => ({
      body: {
        bg: 'darkColor',
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
      fontSize: '2rem',
      lineHeight: '110%',
      letterSpacing: '2px',
      fontWeight: 600,
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
        solid: (props: StyleFunctionProps) => ({
          borderRadius: '3rem',
          background: props.colorMode === 'dark' ?  'lightBg' : 'darkColor',
          color: props.colorMode === 'dark' ? 'darkColor' : 'lightTxt',
          _hover: {
            background: props.colorMode === 'dark' ?  'hoverLightBg' : 'hoverDarkColor',
          }
        }),
        outline: (props: StyleFunctionProps) => ({
          borderRadius: '3rem',
          borderColor: props.colorMode === 'dark' ? 'lightBg' : 'darkColor',
          color: props.colorMode === 'dark' ? 'lightTxt' : 'darkColor',
          _hover: {
            background: props.colorMode === 'dark' ?  'hoverLightBg' : 'hoverDarkColor',
          }
        }),
      },
    },
    FormLabel: {
      baseStyle: {
        fontSize: '0.9rem',
        fontWeight: 600,
        marginBottom: '0.2rem',
      },
    },
    Input: {
      baseStyle: {
        
      },
      variants: {
        outline: (props: StyleFunctionProps) => ({
          field: {
            borderColor: props.colorMode === 'dark' ? '#9a9a9a' : '#darkColor',
            borderWidth: '1px',
            borderRadius: '0.5rem',
            fontSize: '0.8rem',
            fontWeight: 'bold',
            _hover: {
              borderColor: props.colorMode === 'dark' ? '#9a9a9a' : '#darkColor',
              borderWidth: '2px',
            },
            _focus: {
              borderColor: props.colorMode === 'dark' ? '#ffffff' : 'darkColor',
              borderWidth: '2px',
            },
            _disabled: {
              borderColor: props.colorMode === 'dark' ? '#2b2b2b' : '#bbbbbb',
            },
          },
        }),
      }
    },
    Switch: {
      baseStyle: {
        track: {
          bg: 'switchTrackUnchecked',
          borderColor: 'switchModeBorder',
          borderWidth: '1px',
          _checked: {
            bg: 'switchTrackChecked',
          },
        },
        thumb: {
          bg: 'switchThumbUnchecked',
          _checked: {
            bg: 'switchThumbChecked',
          },
          _disabled: {
            bg: 'grey.200',
          },
        }
      },
      defaultProps: {
        size:'md',
      },
    }
  }
})

export default themeChakra