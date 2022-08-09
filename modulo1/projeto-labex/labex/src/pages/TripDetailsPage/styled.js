import styled from "styled-components";

export const DetailsContainer = styled.div`
display: flex;
flex-direction: column;
text-align: center;
background-color: black;
min-height: 100vh;
`
export const TripCard = styled.div`
display: flex;
width: 100vh;
justify-content: center;
flex-direction: column;
align-items: center;
border: 10px solid pink;
align-self: center;
margin-top: 2vh;
background-color: #ffb16a;
border-radius: 5vh;
`
export const TripTitle = styled.h1`
color: #5062f0;
font-size: 5vh;
`
export const Element = styled.p`
font-size: 3vh;
::first-letter{
    color: #5062f0;
}
`
export const CandidatesCard = styled.div`
display: flex;
width: 100vh;
justify-content: center;
flex-direction: column;
align-items: center;
border: 10px solid  #ffb16a;
align-self: center;
margin-top: 2vh;
background-color: pink;
border-radius: 5vh;
margin-bottom: 3vh;
`