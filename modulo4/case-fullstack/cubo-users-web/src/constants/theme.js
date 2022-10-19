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
      width:'40vh',
      border: '1px solid',
      marginTop: '1vh',
      "@media (min-width: 600px)": {
        width: '20vh',
        marginTop: '2vh',
        padding: '2vh',
      
      },  

      },
    },
},
MuiInputBase: {
  styleOverrides: {
    root: {
      width: '40vh',
      backgroundColor: 'white',
      "@media (min-width: 600px)": {
        width: '30vh',
        margin: '15px',
      },    
    }
  }
},
MuiList: {
  styleOverrides: {
    root: {
      flexFlow:'wrap' ,
    }
  }
},
 MuiInputLabel: {
  styleOverrides: {
        root: {
          position: 'relative',
          "&:active": {
            color: 'red',
          },
          "@media (min-width: 600px)": {
            position: 'absolute',
            padding: '1vh',
          }
        }
      }
},

},
    
})

export default theme