import * as React from 'react';
// import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useState, useEffect } from 'react';
import useGenres from '../../services/genres';
import { BASE_URL_GENRES } from '../../constants/urls';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../constants/theme';


export default function ToggleButtonsMultiple({genres}) {
//   const apikey = 'api_key=c443e2649c9a98f6605f9a352ebdf2de'
//   const [filters, setFilters] = useState(() => []);

//   const handleFormat = (event, newFormats) => {
//     setFilters(newFormats);
//   };
// const genres = useGenres(`${BASE_URL_GENRES}${apikey}&language=pt-BR`)
// useEffect(() => {
//   }, [genres]);

//   const allGenres = genres.map(genre => {
//     return (
//          <ToggleButton value={genre.id} aria-label={genre.name}>
//         {genre.name}
//         </ToggleButton>)
//     })

  return (
    <div
    //   value={filters}
    //   onChange={handleFormat}
      // aria-label="filter by"
    >
         <ThemeProvider theme={theme}>
            <ToggleButtonGroup >
                  {genres}
            </ToggleButtonGroup> 
         </ThemeProvider>


    </div>
  );
}