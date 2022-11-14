import styled from 'styled-components'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'

export const MovieCardContainer = styled(Card)`
width: 176px;
height: 360px;
margin: 30px;
padding: 10px;
border: 1px solid #E7E7E7;
border-radius: 4px;
`

export const MovieCardContent = styled(CardContent)`
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: flex-start;
`