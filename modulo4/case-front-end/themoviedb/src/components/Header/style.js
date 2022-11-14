import styled from 'styled-components';
import Toolbar from '@mui/material/Toolbar';

export const StyledToolBar = styled(Toolbar)`
width: 100%;
justify-content: center;
padding-left: 0;
padding-right: 0;
@media (min-width: 767px) {
justify-content: flex-start;
}
`

export const TMDBLogo = styled.img`
width: 140px;
height: 4vh;
@media (min-width: 767px) {
padding-top: 10px;
width: 236px;
height: 10vh;
}
    
`