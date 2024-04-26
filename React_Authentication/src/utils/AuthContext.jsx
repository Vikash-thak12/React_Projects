import { useContext, useEffect, useState, createContext } from "react";
import { account } from "../appwriteConfig";

const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null)

    useEffect( () => {
        setLoading(false)
    }, [])

    const userLogin = async (userInfo) => {
        setLoading(true)
        try{
            let response = await account.createEmailSession(
                userInfo.email,
                userInfo.password
            )

            let accountDetails = await account.get();

            console.log('accountDetails:', accountDetails);
            setUser(accountDetails)
        } catch(error) {
            console.error(error)
        }
        setLoading(false)
    }

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