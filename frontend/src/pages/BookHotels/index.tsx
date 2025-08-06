import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import Hotels from "../Hotels";

const BookHotel : React.FC = () => {

    const location = useLocation()
    const [ searchParams ] = useSearchParams()
    const [ checkIn, setCheckIn ] = useState('')
    const [ checkOut, setCheckOut ] = useState('')
    const [ guests, setGuests ] = useState(1)
    const [ selectedCity, setSelectedCity ] = useState('')
    
    useEffect(() => {
        const city = searchParams.get('city') || ''
        const checkIn = searchParams.get('checkIn') || ''
        const checkOut = searchParams.get('checkOut') || ''
        const guests = parseInt(searchParams.get('guests') || '1')

        setSelectedCity(city)
        setCheckIn(checkIn)
        setCheckOut(checkOut)
        setGuests(guests)
    }, [ checkIn, checkOut, selectedCity, guests ])
    
    return(
        <Hotels
            initialCity = {selectedCity}
            initialCheckIn = {checkIn}
            initialCheckOut = {checkOut}
            initialGuests = {guests}
        />
       
    )
}

export default BookHotel;