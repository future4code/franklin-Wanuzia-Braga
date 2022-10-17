import {createTheme} from '@mui/material/styles';

const theme = createTheme({
palette:{
    primary:{
        main:'#3eb8e2',
        contrastText:'white',
    }
},
components: {
    MuiToolbar: {
        styleOverrides: {
          root: {
            width: "100%",
          },
          regular: {
          "@media (min-width: 600px)": {
              minHeight: "20vh",
            },
        },
      },
},
    MuiPaper: {
      styleOverrides: {
        root: {
          minHeight: "10vh",
          display: 'flex',
          flexDirection: 'column',
          alignContent: 'center',
          width: '100%',

         "@media (min-width: 600px)": {
            minHeight: "20vh",
            flexDirection: 'row',
            width:'100%'
          },
        },
    },
},

},
    
})

export default theme