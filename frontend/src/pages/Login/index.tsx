import { Box, Button, FormControl, Grid, Paper, TextField, Typography } from "@mui/material"
import React, { useState, useEffect, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../context/authContext"
import axiosInstance from "../../services/api"

const Login: React.FC = ({
}) => {

    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [errors,setErrors] = useState<{ username? : string, password?: string }>({ username : '' , password : ''})
    const [serverError,setServerError] = useState('')
    const navigate = useNavigate()
    const auth= useContext(AuthContext)

    const validate = () => {
        const newErrors : typeof errors = {}
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

        if(!userName){
            newErrors.username = 'Username is required'
        } else if(!emailRegex.test(userName)){
            newErrors.username = 'Username is invalid'
        }

        if(!password){
            newErrors.password = 'Password is required'
        } else if(password.length < 6){
            newErrors.password = 'Password must be atleast 6 characters'
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length > 0 ? false : true
    }

    const handleLogin = async() => {
       if(!validate()) return;
       try {
            let response = await axiosInstance.post('/auth/login', { userName, password})
            if(response.status === 200){
                auth?.setIsLoggedIn({ userName : response?.data?.user?.name, status: true})
                navigate('/bookHotels')
            }
       } catch (e) {
          setServerError('Login Failed')
       } 
    }

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
            <Paper elevation={3} sx={{ width: 400, boxShadow: 4, bgcolor: 'lightgrey', padding: 1 }}>
                <Grid component={'div' as React.ElementType} item size={12}>
                    <Typography variant="h5" textAlign="center" fontWeight={700} sx={{ mt: 3 }}>
                        Login
                    </Typography>
                </Grid>
                <Grid component={'div' as React.ElementType} item size={3}>
                    <TextField
                        type="email"
                        label='Usename'
                        value={userName}
                        fullWidth
                        required
                        onChange={(e) => setUserName(e.target.value)}
                        error={!!errors?.username}
                        sx={{ mt : 2 }}
                    />
                </Grid>
                <Grid component={'div' as React.ElementType} item size={3}>
                    <TextField
                        type="password"
                        label='Passsword'
                        value={password}
                        fullWidth
                        required
                        onChange={(e) => setPassword(e.target.value)}
                        error={!!errors?.password}
                        sx={{ mt : 2 }}
                    />
                </Grid>
                {serverError && 
                    <Typography color="error">
                        {serverError}
                    </Typography>
                }
                <Grid component={'div' as React.ElementType} item size={2} sx={{ alignContent: 'center' }}> 
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleLogin}
                        sx={{ mt : 2, py: 1.2 , margin : '16px' }}
                    >Login</Button>
                </Grid>
            </Paper>
        </Box>
    )

}

export default Login;