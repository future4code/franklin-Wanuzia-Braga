import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import { StyledToolBar } from './style';
import { useNavigate } from 'react-router-dom';
import { goToLogin, goToRecipeList } from '../../routes/coordinator';


const Header = ({ rightButtonText, setRightButtonText }) => {
  const token = localStorage.getItem('token')
  const navigate = useNavigate()

  const logout = () => {
    localStorage.removeItem('token')
  }
  const rightButtonActions = () => {
    if (token) {
      logout()
      setRightButtonText('Login')
      goToLogin(navigate)
    } else {
      goToLogin(navigate)
    }
  }

  return (
    <AppBar position="static">
      <StyledToolBar>
        <Button onClick={() => goToRecipeList(navigate)} color="inherit">Cookenu</Button>
        <Button onClick={rightButtonActions} color="inherit">{rightButtonText}</Button>
      </StyledToolBar>
    </AppBar>
  )
}

export default Header