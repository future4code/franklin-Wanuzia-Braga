import {createTheme} from '@mui/material/styles';
import { colors } from './colors';

const theme = createTheme({
palette:{
    primary:{
        main:colors.primaryColor,
        contrastText:'white',
    },
    secondary:{
        main: colors.topColor
    }
},
components: {
    // Name of the component
    MuiToggleButton: {
      styleOverrides: {
        // Name of the slot
        root: {
           background: '#fff',
           margin:'5px',
           color: colors.textFilterDefault,
           fontWeight: '700',
           fontSize: '16px',
           borderRadius: '4px',

          ":hover": {
            background: colors.buttonHover,
            color: colors.textFilterSelected,
          }
           
        },
      },
    },
    MuiToggleButtonGroup: {
      styleOverrides: {
        // Name of the slot
        root: {
            flexFlow: 'wrap',
            display: 'flex',
            justifyContent: 'center',
            padding: '5px',
            alignItems: 'center',
        },
        
      },
    },

    MuiPagination: {
      styleOverrides: {
        // Name of the slot
        root: {
          display: 'flex',
          width: '100%',
          justifyContent: 'center',
          padding: '5px',
          margin: 0,
        },
        icon: {

      },
      },
    },
    MuiPaginationItem: {
      styleOverrides: {
        // Name of the slot
        root: {
          color: colors.topColor,
          fontWeight: '700',
        },
        icon: {

      },
      },
    },
  },
})

export default theme