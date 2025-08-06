import React, { useContext } from "react";
import { Mail } from "@mui/icons-material";
import { Avatar, Grid } from "@mui/material";
import { AuthContext } from "../context/authContext";

const Header = () => {
  const auth = useContext(AuthContext);
  return (
    <Grid container sx={{ mb: 2, backgroundColor: "#f8f8f8" }}>
      <Grid size={8}>
        <h1 style={{ fontFamily: "fantasy", color: "burlywood" }}>
          {" "}
          Comfort Stays
        </h1>
        <div
          aria-label="App sub-tile"
          style={{ marginTop: "-28px", fontFamily: "cursive", font: "16px" }}
        >
          Book Hotels with us
        </div>
      </Grid>
      <Grid size={2} sx={{ display: "flex", m: "8px", mt: 3 }}>
        <Mail />
        <Avatar />
        {auth?.isLoggedIn?.status && (
          <div>
            <h3>{auth?.isLoggedIn?.userName}</h3>
          </div>
        )}
      </Grid>
    </Grid>
  );
};

export default Header;
