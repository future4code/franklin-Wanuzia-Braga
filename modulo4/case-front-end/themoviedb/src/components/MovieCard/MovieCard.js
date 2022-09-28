import React from 'react'
import CardActionArea from '@mui/material/CardActionArea'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { MovieCardContainer, MovieCardContent } from './styled'
import {colors} from '../../constants/colors'

const MovieCard = (props) => {

    return (
      <MovieCardContainer onClick={props.onClick}>
        <CardActionArea>
          <CardMedia
            component={'img'}
            alt={props.title}
            height={'264px'}
            image={props.image}
            title={props.title}
          />
          <MovieCardContent >
            <Typography fontSize={16} fontWeight={700} sx={{ maxHeight: 24 }}>

              {props.title}
              </Typography >
              <br />
              <Typography fontSize={14} color={colors.dateGray} marginTop={4}>

              {props.release_date}
            </Typography>
          </MovieCardContent>
        </CardActionArea>
      </MovieCardContainer>
    )
  }
  
  export default MovieCard