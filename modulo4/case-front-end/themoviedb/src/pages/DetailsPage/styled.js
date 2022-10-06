import styled from 'styled-components';

export const Container = styled.div`
display: flex;
width: 100%;
flex-direction: column;
align-items: center;


@media (min-width: 767px) {

}
`

export const BannerSection = styled.div`
display: flex;
background-color: #2D0C5E;
color: #ffffff;

@media (min-width: 767px) {
width:100%;
flex-direction: row;
min-height: 600px;

}

`
export const PosterImg = styled.img`
width: 186px; 
height:289px;
align-self: center;
margin: 90px 86px;

@media (min-width: 767px) {
  height:574px;
  width: 383px;
}
`

export const MovieCardContainer = styled.div`


@media (min-width: 767px) {
display: block;
justify-content: space-between;
margin-top: 72px;
margin-left: 15vh;
position: absolute;
height: 100%;
margin: 30px;
/* padding: 10px; */
}
`

export const MovieCardContent = styled.div`

@media (min-width: 767px) {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-top: 72px;
  margin-left: 70vh;
  position: relative;
}
`
export const FirtsDetails = styled.div`
display: flex;
flex-direction: row;
padding: 10px;
justify-content: space-between;
/* /* max-width: 350px; */
`
export const Jobs = styled.div`
max-width: 590px;
max-height: 111px;
display: flex;
flex-direction: row;
flex-wrap: wrap;
`
export const Character = styled.div`
display: flex;
flex-direction: column;
flex-wrap: wrap;
padding: 2px;
margin: 16px;
width: 150px;
`
export const Name = styled.div`
display: flex;
flex-direction: row;
width: 150px;
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
@media (min-width: 767px) {
max-width: 84vw;
align-self: center;
overflow-x: auto;
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
width: 907px;
height: 510px;
margin-left: 5vh;
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
