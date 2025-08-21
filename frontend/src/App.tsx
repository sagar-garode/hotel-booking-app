import React, { useContext } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import routes from "./routes/routes.tsx";
import Header from "./pages/Header.tsx";
import Footer from "./pages/Footer.tsx";
import Navbar from "./Navbar.tsx";
import { AuthContext } from "./context/authContext.tsx";
import Login from "./pages/Login/index.tsx";
import Logout from "./pages/Logout/index.tsx";
import { FormControlLabel, FormGroup, Switch } from "@mui/material";
import { ThemeContext } from "./context/themeContext.tsx";

const App = () => {
  const auth = useContext(AuthContext);
  const theme = useContext(ThemeContext);

  const handleToogleChange = () => theme?.theme === "light" ? theme?.setTheme("dark") : theme?.setTheme("light");

  const mainCssStyle = {
    backgroundColor: theme?.theme === "light" ? "white" : "black",
    color: theme?.theme === "light" ? "black" : "white",
  };

  return (
    <div style={mainCssStyle}>
      <BrowserRouter>
        <Header />
        <div aria-description="Main Content" id="main">
          <Navbar />
          <FormGroup>
            <FormControlLabel
              control={<Switch onChange={handleToogleChange} />}
              label="Dark Mode"
            />
          </FormGroup>
          <Routes>
            {routes.map((route, index) => (
              <Route
                key={index + 1}
                path={route.path}
                element={route.element}
              />
            ))}
            {!auth?.isLoggedIn?.status ? (
              <Route path="/login" element={<Login />} />
            ) : (
              <Route path="/logout" element={<Logout />} />
            )}
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
