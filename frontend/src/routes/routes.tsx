import React, { ReactElement } from "react";
import Bookings from "../pages/Bookings/index.tsx";
import Hotels from "../pages/Hotels/index.tsx";
import BookHotel from "../pages/BookHotels/index.tsx";
import Contact from "../pages/Contact Us/index.tsx";

interface RouteProps {
    path: string,
    element: ReactElement,
    label: string 
}

const routes : RouteProps[] = [
    { path : '/', element : <Hotels />, label : 'Home' },
    { path : '/bookHotels', element : <BookHotel />, label : 'Book Hotels' },
    { path : '/contactUs', element : <Contact />, label : 'Contact Us' },
    { path : '/bookings', element : <Bookings />, label : 'Bookings' },
]

export default routes;