import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
`

const Card = styled.div`
display: flex;
flex-direction: column;
width: 400px;
height: 300px;
background-color: black;
border: 2px solid pink;
line-height: 12px;
padding: 3px;
`
const Span = styled.span`
color: orange;
font-weight: bold;
`
const Prop = styled.p`
color: white;
line-height: 15px;

`

export const TripsCard = (props) => {
    return (
        <CardContainer>
            <Card>
                <Span>Nome:</Span><Prop>{props.name}</Prop>
                <Span>Descrição:</Span><Prop>{props.description}</Prop>
                <Span>Planeta:</Span><Prop>{props.planet}</Prop>
                <Span>Duração:</Span><Prop>{props.duration}</Prop>
                <Span>Data:</Span><Prop>{props.date}</Prop>
            </Card>
        </CardContainer>

    )
} 