import styled from 'styled-components';

export const Container = styled.div`

`

export const BannerSection = styled.div`
display: flex;
justify-content: flex-start;
background-color: #2D0C5E;
color: #ffffff;
min-height: 600px;

`

export const MovieCardContainer = styled.div`
  max-width: fit-content;
  display: inline-block;
  justify-content: space-between;
  margin-top: 72px;
  margin-left: 15vh;
  position: absolute;
  /* justify-content: space-between; */
/* width: 100%;
  height: 100%;
  margin: 30px; */
  /* padding: 10px; */
`
export const PosterImg = styled.img`
  height:'500px';
  width: '383px';
`
export const MovieCardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-top: 72px;
  margin-left: 70vh;
  position: absolute;
`
export const FirtsDetails = styled.div`
display: flex;
max-width: 350px;
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
export const ShowCase = styled.div`
display: flex;
/* flex-direction: row; */
/* flex: none; */
/* max-width: 85vw; */
/* justify-content: center; */
/* align-self: center; */
overflow-x: auto;
scroll-behavior: smooth;
margin: 0px 5vh ;
`
export const ShowcaseItem = styled.div`
display: flex;
flex-direction: column;
padding: 5px;
background: #FFFFFF;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 4px;
margin: 1vh;

`
export const Trailer = styled.video`
width: 907px;
height: 510px;
margin-left: 5vh;
`

export const ProfileImage = styled.img`
width: 175px;
height: 221px;
margin-bottom: 2vh;
object-fit: cover;
`
export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
