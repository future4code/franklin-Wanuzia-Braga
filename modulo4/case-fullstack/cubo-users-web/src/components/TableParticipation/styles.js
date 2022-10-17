import styled from 'styled-components'
import media from '../../styles/media'

export const GridContainer = styled.div`
width: 100%;
height: max-content;
@media ${media.tablet} {
    flex-direction: row;
}
`