import { API_KEY, URL_FILTER_BY, URL_GETBYGENRE, URL_LANGUAGE } from "../urls";
import useRequestData from "../hooks/useRequestData";


function GetByGenre() {
const movies = useRequestData([], `${URL_GETBYGENRE}${API_KEY}${URL_LANGUAGE}${URL_FILTER_BY}Actionrate`)
console.log(movies)
return (
    <div>
        {movies}
    </div>

)

}

export default GetByGenre;