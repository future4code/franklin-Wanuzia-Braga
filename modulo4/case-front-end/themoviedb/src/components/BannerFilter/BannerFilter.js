import * as React from 'react';
import ToggleButtonsMultiple from '../ButtonFilter/ButtonFilter';
import { BannerSection, TitleBanner, TitleDiv, ButtonsGenres } from './style';
import ToggleButton from '@mui/material/ToggleButton';
import useGenres from '../../services/genres';
import { BASE_URL_GENRES } from '../../constants/urls';
import { genresMock } from '../../services/mockGenres';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../constants/theme';
import { colors } from '../../constants/colors';


const BannerHeader = () => {
    // const [genres, setGenres] = useState()
    //   const navigate = useNavigate()
    const apikey = 'api_key=c443e2649c9a98f6605f9a352ebdf2de'
    const genres = useGenres([],`${BASE_URL_GENRES}${apikey}&language=en-US`)
    const allGenres = genresMock.genres.map(genre => {

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