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
          alignContent: 'center',

         "@media (min-width: 600px)": {
            minHeight: "20vh",
          },
        },
    },
}

},
    
})

export default theme