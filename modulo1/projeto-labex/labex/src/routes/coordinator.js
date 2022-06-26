export const goToHome = (navigate) =>{
    navigate("/")
}

export const goToListTrips = (navigate) =>{
    navigate("/trips/list")
}

export const goToLogin = (navigate) =>{
    navigate("login/")
}

export const goToLastPage = (navigate) =>{
    navigate(-1)
}

export const goToForm = (navigate) => {
    navigate('/trips/application')
}

export const goToAdminTripsList = (navigate) =>{
    navigate('/admin/trips/list')
}

export const goToCreatTrip = (navigate) =>{
    navigate('/admin/trips/create')
}

// export const goToTripDetails = (navigate) => {
//     navigate('/admin/trips/:id')
// }
