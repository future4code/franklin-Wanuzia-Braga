import styled from 'styled-components';

export const Container = styled.div`
display: flex;
width: 100%;
flex-direction: column;
/* align-items: center; */


`

export const BannerSection = styled.div`
display: flex;
background-color: #2D0C5E;
color: #ffffff;
width:100%;
@media (min-width: 767px) {
flex-direction: row;
min-height: 80vh;
max-height: 90vh;
margin-bottom: 1.5vh;

}

`
export const PosterImg = styled.img`
width: 186px; 
height: 289px;
align-self: center;
filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
border-radius: 8px;


@media (min-width: 1248px) {
height: 574px;
width: 383px;
margin: 9vh 0vw;
position: absolute;
}
`

export const MovieCardContainer = styled.div`

display: block;
justify-content: space-between;
margin-top: 8vh;
margin-left: 15vh;
position: absolute;
height: 100%;

`

export const MovieCardContent = styled.div`
margin-top: 50vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
max-width: min-content;
text-align: center;
@media (min-width: 767px) {
margin-top: 10vh;
margin-left: 40vw;
align-items: flex-start;
justify-content: flex-start;
/* position: relative; */
}
`
export const FirtsDetails = styled.div`
display: flex;
flex-direction: row;
align-items: center;
/* /* max-width: 350px; */
`

export const LittleDetails = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
font-weight: 400;
margin-bottom: 1vh;
width: min-content;
@media (min-width: 767px) {
width: 684px;
height: 24px;
font-size: 1.8vh;
line-height: 24px;
align-items: center;
justify-content: flex-start;
}

`
export const GenresMovie = styled.div`
display: flex;
padding: 8px;
column-gap: 5px;
align-items: center;

`

export const DetailParagraph = styled.strong`
margin-left: 15px;

`
export const SinopseDetail = styled.p`
text-align: center;

@media (min-width: 767px) {
text-align: justify;
max-width: 60vw;
}
`
export const Jobs = styled.div`
max-width: 590px;
display: flex;
flex-direction: row;
flex-wrap: wrap;
margin-left: 15px;
`
export const Character = styled.div`
display: flex;
align-content: center;
text-align: left;
@media (min-width: 767px) {
margin: 10px;
flex-direction: column;
flex-wrap: wrap;
width: 150px;
}

`
export const Name = styled.div`
display: flex;
flex-direction: row;
width: 200px;
font-weight: 700;
`
export const Section = styled.section`
  display: flex; 
  flex-direction: column;
  justify-content: center;
`

export const ShowCase = styled.div`
display: flex;
flex-direction: row;
scroll-behavior: smooth;
flex: none;
overflow-x: auto;
@media (min-width: 767px) {
max-width: 84vw;
margin: 0px 5vh ;
padding: 5px;
}
`
export const ShowcaseItem = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 16px;
padding: 8px;
background: #FFFFFF;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 4px;
margin: 1vh;

`
export const ProfileImage = styled.img`
width: 175px;
height: 221px;
border-radius: 4px;
flex: none;
order: 0;
flex-grow: 0;
margin-bottom: 2vh;
object-fit: cover;
`
export const Trailer = styled.iframe`
width: 324px;
height: 182px;
margin-left: 20px;
@media (min-width: 767px) {
width: 907px;
height: 510px;
margin-left: 5vh;
}
`

export const PosterItem = styled.img`

width: 175px;
height: 221px;
margin-bottom: 2vh;
object-fit: cover;
:hover {
  cursor: pointer;
}
`

export const Title = styled.h1`
font-size: 2vh;
margin-top: 5vh;
@media (min-width: 767px) {
font-size: 5vh;
}

`
