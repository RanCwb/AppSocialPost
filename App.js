import React from "react";
import { StatusBar } from "react-native";
import Routes from "./src/routes";
import {NavigationContainer  } from "@react-navigation/native";
import AuthProvider from "./src/context/auth";


export default function App() {

  return(


      <NavigationContainer>
        <AuthProvider>
          <StatusBar  translucent={false} barStyle="dark-content"/>
          <Routes/>
        </AuthProvider>
      </NavigationContainer>


  )
  
}
