import React from 'react'
import CardActionArea from '@mui/material/CardActionArea'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { MovieCardContainer, MovieCardContent } from './styled'


const MovieCard = (props) => {

    return (
      <MovieCardContainer onClick={props.onClick}>
        <CardActionArea>
          <CardMedia
            component={'img'}
            alt={props.title}
            height={'150px'}
            image={props.image}
            title={props.title}
          />
          <MovieCardContent>
            <Typography align={'center'}>
              {props.title}
            </Typography>
            <Typography align={'center'}>
              {props.release_date}
            </Typography>
          </MovieCardContent>
        </CardActionArea>
      </MovieCardContainer>
    )
  }
  
  export default MovieCard