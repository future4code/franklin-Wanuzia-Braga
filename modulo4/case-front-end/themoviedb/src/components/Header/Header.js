import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import { StyledToolBar, TMDBLogo } from './style';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../constants/theme';
import logo from '../../assets/logo.svg'



const Header = () => {
//   const navigate = useNavigate()

  return (
    <div>
    <ThemeProvider theme={theme}>
    <AppBar position="static" color='secondary'>
      <StyledToolBar>
      <a href='https://www.themoviedb.org/'><TMDBLogo src={logo} alt="Sigla da The Movies DataBase"/></a>
      </StyledToolBar>
    </AppBar>
    </ ThemeProvider >
    </div>
  )
}

export default Header