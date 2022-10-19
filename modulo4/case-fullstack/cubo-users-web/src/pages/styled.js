import styled from "styled-components";
import media from '../styles/media'

export const GraphContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-evenly;
@media ${media.tablet} {
    flex-direction: row;
}
`