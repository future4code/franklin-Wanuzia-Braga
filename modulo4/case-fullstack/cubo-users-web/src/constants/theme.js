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
            paddingLeft: '0',
            margin: '0',
          },
          regular: {
            height: "12px",
            width: "20px",
            minHeight: "32px",
            "@media (min-width: 600px)": {
              minHeight: "20vh",
            },
        },
      },
}}
    
})

export default theme