
export const goToLogin = (navigate) => {
    navigate('/login')
}

export const goToSignUp= (navigate) => {
    navigate('/cadastro')
}

export const goToAddRecipes = (navigate) => {
    navigate('/adicionar-receita')
}

export const goToRecipeDetail = (navigate, id) => {
    navigate(`/detalhes/${id}`)
}
export const goToRecipeList = (navigate) => {
    navigate('/'    )
}
export const goToLastPage = (navigate) => {
    navigate(-1)
}