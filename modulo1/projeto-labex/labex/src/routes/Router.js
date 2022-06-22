import { BrowserRouter, Routes, Route } from  'react-router-dom';
import { ApplicationFormPage } from '../pages/ApplicationFormPage';
import { HomePage } from '../pages/HomePage';
import { ListTripsPage } from '../pages/ListTripsPage';
import { LoginPage } from '../pages/LoginPage';


export const Router = () =>{
    return(
        <BrowserRouter>
        <Routes>
            <Route index element={<HomePage/>}/>
            <Route path="ListTripsPage/" element={<ListTripsPage/>} />
            <Route path='Login/' element={<LoginPage/>} />
            <Route path='ListTripsPage/Formulario/' element={<ApplicationFormPage />}/>
        </Routes>
        </BrowserRouter>
    )
}
