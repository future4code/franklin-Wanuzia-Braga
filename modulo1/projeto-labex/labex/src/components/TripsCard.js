import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
`
const Card = styled.div`
width: 500px;
background-color: #231e3e;
border: 2px solid pink;
line-height: 10px;
padding: 8px;
margin: 5px;
:hover{
    transform: translateY(-5px);
    border-left: 5px solid #5062f0;
}
`
const Span = styled.span`
color: orange;
font-weight: bold;
font-size: 18px;
`
const Prop = styled.p`
color: white;
line-height: 25px;
font-size: 18px;
font-weight: bold;

`

export const TripsCard = (props) => {
    return (
        <CardContainer>
            <Card>
                <Span>Nome:</Span><Prop>{props.name}</Prop>
                <Span>Descrição:</Span><Prop>{props.description}</Prop>
                <Span>Planeta:</Span><Prop>{props.planet}</Prop>
                <Span>Duração:</Span><Prop>{props.duration} dias.</Prop>
                <Span>Data:</Span><Prop>{props.date}</Prop>
            </Card>
        </CardContainer>

    )
} 