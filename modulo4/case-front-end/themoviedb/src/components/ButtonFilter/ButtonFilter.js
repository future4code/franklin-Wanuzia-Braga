import * as React from 'react';
// import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
// import { useState, useEffect } from 'react';
// import useGenres from '../../services/genres';
// import { BASE_URL_GENRES } from '../urls';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../constants/theme';


export default function ToggleButtonsMultiple({genres}) {
  // const [filters, setFilters] = useState(() => []);

  // const handleFormat = (event, newFormats) => {
  //   setFilters(newFormats);
  // };
// const genres = useGenres()
// useEffect(() => {
//   }, [genres]);

//   const allGenres = genres.map(genre => {
//     return (
//          <ToggleButton value={genre.id} aria-label={genre.name}>
//         {genre.name}
//         </ToggleButton>)
//     })

  return (
    <div>
         <ThemeProvider theme={theme}>
            <ToggleButtonGroup 
                  // value={filters}
                  // onChange={handleFormat}
                  // aria-label="filter by"
                  >
                    
                  {genres}

            </ToggleButtonGroup> 
         </ThemeProvider>


    </div>
  );
}
