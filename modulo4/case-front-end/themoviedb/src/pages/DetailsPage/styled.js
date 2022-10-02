import styled from 'styled-components';

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
  height:'574px';
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
`