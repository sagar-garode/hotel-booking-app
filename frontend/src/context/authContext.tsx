import React , { createContext, ReactNode, useState } from 'react'

interface IsLoggedInInterface {
    userName: string,
    status: boolean
}
interface AuthContextInterface {
    isLoggedIn : IsLoggedInInterface | null,
    setIsLoggedIn : React.Dispatch<React.SetStateAction<IsLoggedInInterface | null>>
}
export const AuthContext = createContext<AuthContextInterface | null>(null)

export const AuthContextProvider = ({ children } : { children : ReactNode }) => {
    const [ isLoggedIn, setIsLoggedIn ] = useState<IsLoggedInInterface | null>(null)
    return(
        <AuthContext.Provider value={{ isLoggedIn , setIsLoggedIn }}>
            {children}
        </AuthContext.Provider>
    )
}