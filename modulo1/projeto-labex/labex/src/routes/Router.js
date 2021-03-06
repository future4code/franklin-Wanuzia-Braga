import { BrowserRouter, Routes, Route } from  'react-router-dom';
import { AdminHomePage } from '../pages/AdminHomePage/AdminHomePage';
import { ApplicationFormPage } from '../pages/ApplicationFom/ApplicationFormPage';
import { CreateTripPage } from '../pages/CreateTrip/CreateTripPage';
import { HomePage } from '../pages/HomePage';
import { ListTripsPage } from '../pages/ListTripsPage';
import { LoginPage } from '../pages/LoginPage';
import { TripDetailPage } from '../pages/TripDetailsPage/TripDetailsPage';


export const Router = () =>{
    return(
        <BrowserRouter>
        <Routes>
            <Route index element={<HomePage/>}/>
            <Route path="/trips/list" element={<ListTripsPage/>} />
            <Route path='/login' element={<LoginPage/>} />
            <Route path='/trips/application' element={<ApplicationFormPage />}/>
            <Route path='/admin/trips/list' element={<AdminHomePage />} />
            <Route path='/admin/trips/create' element={< CreateTripPage />} />
            <Route path='/admin/trips/:id' element={<TripDetailPage />} />
            <Route path='*' element={<div><h1>Error 404</h1><br/><h3>Ops! Página não encontrada!</h3></div>} />

        </Routes>
        </BrowserRouter>
    )
}
