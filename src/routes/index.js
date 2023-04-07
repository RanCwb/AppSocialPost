import React,{useContext} from "react";
import {View,Text, ActivityIndicator } from "react-native";
import AuthRoutes from "./auth.routes";
import AppRoutes from "./app.routes";
import { AuthContext } from "../context/auth";


function Routes() {

    const {singed,loading} = useContext(AuthContext)




    if (loading) {
        return(
        <View style={{flex:1, justifyContent:'center', alignItems:"center", backgroundColor: '#e52246'}}>
                <ActivityIndicator size={100} color="#e52246"/>
        </View>
        )
    }

    return(

        singed ? <AppRoutes/> : <AuthRoutes/>



    )
    
}

export default Routes;