import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import { StyledToolBar } from './style';
import { useNavigate } from 'react-router-dom';
import { goToLogin, goToRecipeList } from '../../routes/coordinator';

const Header = () => {
    const navigate = useNavigate()
  return (
        <AppBar position="static">
        <StyledToolBar>
          <Button onClick={()=> goToRecipeList(navigate)} color="inherit">Cookenu</Button>
          <Button onClick={()=> goToLogin(navigate)}color="inherit">Login</Button>
        </StyledToolBar>
      </AppBar>
  )}

export default Header