import {extendTheme} from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      'html, body': {
        bg:"#E4E4E4"
      }
    },
  },
  fonts: {
      body: `'Gotham', sans-serif`,
    },colors: {
      primary: {
        100: '#FCAB3F',
        200: '#FDC963',
        300: "#4D4D4D",
        400: "#FFFFFF"
      },
      secundary: {
        100: '#A1D2CE',
        200: '#F49897',
        300: "#E4E4E4",
        400: "#FEF2F1"
      }
    },
  })

export default theme;