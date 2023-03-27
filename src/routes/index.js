import React,{useContext} from "react";
import {View,Text, ActivityIndicator } from "react-native";
import AuthRoutes from "./auth.routes";
import AppRoutes from "./app.routes";
import { AuthContext } from "../context/auth";


function Routes() {

    const {singed} = useContext(AuthContext)


    const loading = false

    if (loading) {
        <View style={{flex:1, justifyContent:'center', alignItems:"center", backgroundColor: '#36393f'}}>
                <ActivityIndicator size={60} color="red"/>
        </View>
    }

    return(

        singed ? <AppRoutes/> : <AuthRoutes/>



    )
    
}

export default Routes;