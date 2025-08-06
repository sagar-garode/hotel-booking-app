import { AppBar, IconButton, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import routes from "./routes/routes.tsx";
import { AuthContext } from "./context/authContext.tsx";

const Navbar = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const auth = useContext(AuthContext)
    const [tabValue, setTabvalue] = useState('Home')

    const handleTabChange = (path : string, tabValue : string) : void => {
        navigate(path)
        setTabvalue(tabValue)
    }

    return(
        <AppBar position="static">
            <Toolbar variant="dense">
                <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                </IconButton>
                <Typography variant="h6" color="inherit" component="div">
                    <Tabs value={tabValue}>
                        {routes.map((tab,index) =>(
                            <Tab 
                                key = {index}
                                value={tab.label}
                                label={tab.label}
                                onClick={() => handleTabChange(tab.path,tab.label)}></Tab>
                        ))}
                        <Tab 
                            label={auth?.isLoggedIn?.status ? 'Logout' : 'Login'} 
                            value={auth?.isLoggedIn?.status ? 'Logout' : 'Login'}
                            onClick={() => handleTabChange(`${auth?.isLoggedIn?.status ? '/logout' : '/login'}` , `${auth?.isLoggedIn?.status ? 'Logout' : 'Login'}` )}/>
                    </Tabs>
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;