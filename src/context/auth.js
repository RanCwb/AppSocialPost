import React,{useContext,useState,createContext}from "react"



export const AuthContext = createContext({})


function AuthProvider({children}) {

    const [user, setUser] = useState(

        {nome:'RANATHAN'}

    )
    
    return(
        <AuthContext.Provider value={{singed: !!user}}>

            {children}

        </AuthContext.Provider>
    )


}


export default AuthProvider