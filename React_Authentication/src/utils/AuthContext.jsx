import { useContext, useEffect, useState, createContext } from "react";
import { account } from "../appwriteConfig";

const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(false)

    useEffect( () => {
        setLoading(false)
    }, [])

    const userLogin = async (userInfo) => {
        setLoading(true)
        console.log("UserInfo:", userInfo)
        try{
            let response = await account.createEmailSession(
                userInfo.email,
                userInfo.password
            )

            console.log('SESSION:', response)
            // let accountDetails = await account.get();
            // setUser(accountDetails)
           
        } catch(error) {
            console.error(error)
            // console.log("Error")
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