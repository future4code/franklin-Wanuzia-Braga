import styled from 'styled-components';
import Toolbar from '@mui/material/Toolbar';

export const StyledToolBar = styled(Toolbar)`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

@media (min-width: 600px) {
flex-direction: row;
}
`