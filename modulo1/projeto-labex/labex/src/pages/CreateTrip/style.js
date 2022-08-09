import styled from "styled-components";

export const FormContainer = styled.div`
display: flex;
flex-direction: column;
text-align: center;
background-color: black;
min-height: 100vh;
`
export const FormCard = styled.div`
display: flex;
flex-direction: column;
width: 100vh;
align-items: center;
border: 10px solid pink;
align-self: center;
margin-top: 2vh;
background-color: #ffb16a;
border-radius: 5vh;
`
export const FormTitle = styled.h1`
color: #00203c;
font-size: 5vh;
`
export const Form = styled.form`
display: flex;
flex-direction: column;
padding: 5vh;
justify-content: flex-start;
text-align: start;
`
export const Label = styled.label`
font-size: 3vh;
::first-letter{
    font-weight: bold;
}
`
export const Input = styled.input`
width: 90vh;
padding: 1vh;
margin: 1vh;
font-size: 2.5vh;
font-weight: bold;
color: blue;
text-align: center;
`
export const ButtonCreate = styled.button`
width: 50vh;
margin: 1vh;
padding: 2vh;
border-radius: 2vh;
font-size: 4vh;
color: #5062f0;
font-weight: bold;
align-self: center;
&:hover{        
    background-color: #5062f0;
    color: #ffffff;
    cursor: pointer;
}
`