import styled from 'styled-components';
import Toolbar from '@mui/material/Toolbar';
import media from '../../styles/media'

export const StyledToolBar = styled(Toolbar)`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

@media ${media.tablet} {
flex-direction: row;
}
`