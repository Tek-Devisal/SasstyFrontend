import { createContext, useState } from "react";
import jwt_decode from 'jwt-decode';
// import { useNavigate } from "react-router-dom"

export const UserContext = createContext();

export function UserProvider ({children}) {

    // const navigate = useNavigate();

    const [userInfo, setUserInfo] = useState(()=>
    localStorage.getItem('authTokens')? jwt_decode(localStorage.getItem('authTokens')):null);


    const [authTokens, setAuthTokens] = useState(()=>
    localStorage.getItem('authTokens')? JSON.parse(localStorage.getItem('authTokens')):null);



    return(
        <UserContext.Provider 
            value={{userInfo, 
                    setUserInfo,
                    authTokens,
                    setAuthTokens,
                    }}>

            {children}
        </UserContext.Provider>
    );
}

