import { useContext, useEffect, useState, createContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    const [loading, SetLoading] = useState(true);
    const [user, setUser] = useState(false)

    useEffect( () => {
        SetLoading(false)
    }, [])

    const userLogin = (userInfo) => {}

    const userLogout = () => {}

    const registerUser = (userInfo) => {}

    const userStatus = () => {}


    const contextData = {
        user,
        userLogin,
        userLogout,
        registerUser,
        userStatus
    }
    return(
        <AuthContext.Provider value={contextData}>
            {loading ? <p>loading..</p> : children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {return useContext(AuthContext)}
export default AuthContext;