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
        width: "70%",
        minHeight: "25vh",
      },
      regular: {
      "@media (min-width: 600px)": {
        width: "100%",
        minHeight: "20vh",
        alignItems: 'center',
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
        alignItems: 'center',
        width: '100%',

        "@media (min-width: 600px)": {
          minHeight: "20vh",
          flexDirection: 'row',
          alignItems: 'center',
          width:'100%'
          },
        },
    },
},
MuiButtonBase: {
  styleOverrides: {
    root: {
      width:'100%',
      "@media (min-width: 600px)": {
        width: '20vh'
      },  

      },
    },
},
MuiInputBase: {
  styleOverrides: {
    root: {
      width: '300px',
      "@media (min-width: 600px)": {
        width: '20vh'
      },    
    }
  }
}
 

},
    
})

export default theme