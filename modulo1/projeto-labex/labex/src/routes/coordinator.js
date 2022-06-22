import React from "react";

export const goToHome = (navigate) =>{
    navigate("/")
}

export const goToListTrips = (navigate) =>{
    navigate("ListTripsPage/")
}

export const goToLogin = (navigate) =>{
    navigate("Login/")
}

export const goToLastPage = (navigate) =>{
    navigate(-1)
}

export const goToForm = (navigate) => {
    navigate('./Formulario/')
}