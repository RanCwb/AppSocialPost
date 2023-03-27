import React,{useState} from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Serach from "../pages/Serach";
//import NewPost from "../pages/NewPost";
//import PostsUser from "../pages/PostsUser";


const Tab = createBottomTabNavigator()

function AppRoutes() {
    return(
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home}/>
            <Tab.Screen name="Profile" component={Profile}/>
            <Tab.Screen name="Serach" component={Serach}/>
        </Tab.Navigator>



    )
}

export default AppRoutes;