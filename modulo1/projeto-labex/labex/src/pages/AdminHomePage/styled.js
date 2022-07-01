import styled from "styled-components"

export const ContainerPainel = styled.div`
display: flex;
flex-direction: column;
text-align: center;
background-color: black;
min-height: 100vh;
`
export const TripsContainer= styled.div`
display: flex;
align-items: center;
flex-direction: column;
padding: 3vh;
`
export const TripsContent = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`
export const ButtonsAdmin = styled.button`
width: 40vh;
margin: 1vh;
border-radius: 2vh;
font-size: 4vh;
color: #f98882;
border: 5px solid #f98882;
&:hover{        
    background-color: #f98882;
    color: #ffffff;
    cursor: pointer;
}
`
export const Título = styled.h2`
color: white;
font-size: 5vh;
`
export const Trip = styled.div`
display: flex; 
justify-content: center;
width: 200vh; 
padding: 2vh;
`
export const TripButton = styled.button`
width: 50vh;
margin: 1vh;
padding: 2vh;
border-radius: 2vh;
font-size: 4vh;
color: #5062f0;
font-weight: bold;
&:hover{        
    background-color: #5062f0;
    color: #ffffff;
    cursor: pointer;
}
`
export const DeleteButton = styled.button`
border-radius: 2vh;
font-size: 4vh;
color: red;
font-weight: bold;
&:hover{        
    background-color: red;
    color: #ffffff;
    cursor: pointer;
}
`