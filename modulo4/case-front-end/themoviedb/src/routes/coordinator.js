export const goToPopularMoviesList = (navigate) => {
    navigate('/')
}

export const goToMovieDetails = (navigate, id) => {
    navigate(`/movie/${id}`)
}

export const goToLastPage = (navigate) => {
    navigate(-1)
}