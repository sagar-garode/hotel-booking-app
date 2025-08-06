import React, { useState, useEffect } from "react";
import axiosInstance from "../../services/api";
import { CityInterface } from "../../interface/cityInterface";
import {
  Grid,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Button,
  Typography,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { HotelSearch } from "../../interface/hotelInterface";

const Hotels: React.FC<HotelSearch> = ({
  initialCity,
  initialCheckIn,
  initialCheckOut,
  initialGuests,
}) => {
  const [cities, setCities] = useState<CityInterface[]>([]);
  const [checkIn, setCheckIn] = useState(initialCheckIn || "");
  const [checkOut, setCheckOut] = useState(initialCheckOut || "");
  const [guests, setGuests] = useState(initialGuests || 1);
  const [selectedCity, setSelectedCity] = useState(initialCity || "");
  const location = useLocation();
  const navigate = useNavigate();

  const fetchCities = async () => {
    const res = await axiosInstance.get("/cities");
    if (res) setCities(res?.data);
  };
  useEffect(() => {
    fetchCities();
  }, []);

  useEffect(() => {
    if (initialCheckIn) setCheckIn(initialCheckIn);
    if (initialCheckOut) setCheckOut(initialCheckOut);
    if (initialCity) setSelectedCity(initialCity);
    if (initialGuests) setGuests(initialGuests);
  }, [initialCheckIn, initialCheckOut, initialCity, initialGuests]);

  const handleSearch = () => {
    const params = new URLSearchParams({
      city: selectedCity,
      checkIn,
      checkOut,
      guests: guests.toString(),
    });
    navigate(`/bookHotels?${params.toString()}`);
  };

  return (
    <Grid container spacing={3} sx={{ maxWidth: 1500, mx: "auto", mt: 4 }}>
      <Grid component={"div" as React.ElementType} item size={12}>
        <Typography variant="h5" textAlign="left">
          Search Hotels
        </Typography>
      </Grid>
      <Grid component={"div" as React.ElementType} item size={2}>
        <FormControl fullWidth required>
          <InputLabel id="City">Select City</InputLabel>
          <Select
            value={selectedCity}
            labelId="City"
            onChange={(e) => setSelectedCity(e.target.value)}
            label="City"
          >
            {cities.map((city) => (
              <MenuItem key={city._id} value={city._id}>
                {city.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid component={"div" as React.ElementType} item size={3}>
        <TextField
          type="date"
          label="Check-in"
          value={checkIn}
          fullWidth
          required
          onChange={(e) => setCheckIn(e.target.value)}
          slotProps={{
            inputLabel: { shrink: true },
          }}
        />
      </Grid>
      <Grid component={"div" as React.ElementType} item size={3}>
        <TextField
          type="date"
          label="Check-Out"
          value={checkOut}
          fullWidth
          required
          onChange={(e) => setCheckOut(e.target.value)}
          slotProps={{
            inputLabel: { shrink: true },
          }}
        />
      </Grid>
      <Grid component={"div" as React.ElementType} item size={2}>
        <TextField
          type="number"
          label="No of Guests"
          value={guests}
          fullWidth
          required
          onChange={(e) => setGuests(Number(e.target.value))}
        />
      </Grid>
      {!(location.pathname === "/bookHotels") && (
        <Grid component={"div" as React.ElementType} item size={2}>
          <Button variant="contained" color="primary" onClick={handleSearch}>
            Search Hotels
          </Button>
        </Grid>
      )}
    </Grid>
  );
};

export default Hotels;
