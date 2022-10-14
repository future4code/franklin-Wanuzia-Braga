import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import { StyledToolBar } from './styled';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../constants/theme';
import ParticipationForm from '../Form/ParticipationForm';


const Header = () => {
    
      return (
        <div>
        <ThemeProvider theme={theme}>
        <AppBar position="static" color='primary'>
          <StyledToolBar>
            <ParticipationForm />
          </StyledToolBar>
        </AppBar>
        </ ThemeProvider >
        </div>
      )
    }
    
    export default Header