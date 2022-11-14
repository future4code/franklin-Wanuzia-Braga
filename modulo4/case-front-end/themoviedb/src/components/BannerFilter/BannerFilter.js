import * as React from 'react';
import ToggleButtonsMultiple from '../ButtonFilter/ButtonFilter';
import { BannerSection, TitleBanner, TitleDiv, ButtonsGenres } from './style';
import ToggleButton from '@mui/material/ToggleButton';
import useGenres from '../../services/genres';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../constants/theme';


const BannerHeader = () => {
    // const [genre, setGenre] = useState() - passar esse dado por props? criar endpoint para filter results?
    //   const navigate = useNavigate()
    const genres = useGenres() // falta utilizar os dados que chegam da API
    const allGenres = genres.map(genre => {

        return (
            <ThemeProvider theme={theme}>
                <ToggleButton 
                key={genre.id}
                value={genre.id} 
                aria-label={genre.name} 
                >
                {genre.name}
                </ToggleButton> 
            </ThemeProvider>
        )
        }) 
        console.log(genres)

      return (
 
            <BannerSection >
                <TitleDiv>
                    <TitleBanner>
                        Milhões de filmes, 
                        séries e pessoas para descobrir. 
                        Explore já.
                    </TitleBanner>
                </TitleDiv>
                     <p>FILTRE POR:</p>
                <ButtonsGenres>
                <ToggleButtonsMultiple genres={allGenres} />
                </ButtonsGenres>
            </BannerSection>

      )
    }
    
    export default BannerHeader