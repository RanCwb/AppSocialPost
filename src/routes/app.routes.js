import React,{useState} from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Feather from "react-native-vector-icons/Feather"
import {createStackNavigator} from "@react-navigation/stack"

import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Serach from "../pages/Serach";
import NewPost from "../pages/NewPost";
import PostsUser from "../pages/PostsUser";


const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()


function StackRoutes() {
    return(

        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={Home}
                options={{
                 headerShown: false

                }}
            />
              <Stack.Screen
                name="NewPost"
                component={NewPost}
                options={{
                    title: 'Novo Post',
                    headerTintColor: 'white',


                    headerStyle:{
                        backgroundColor:'#e52246'
                    }

                }}
            />
              <Stack.Screen
                name="Posts User"
                component={PostsUser}
                options={{
                    headerTintColor: 'white',

                    headerStyle:{
                        backgroundColor:'#e52246'
                    }


                }}
            />
        </Stack.Navigator>


    )
}




function AppRoutes() {
    return(
        <Tab.Navigator
        screenOptions={{
            headerShown:false,
            tabBarHideOnKeyboard: true,
            tabBarShowLabel: false,
            tabBarActiveTintColor: 'white',


            tabBarStyle:{
                backgroundColor: '#e52246',
                borderTopWidth: 0

            } 

        }}

        >
            <Tab.Screen name="HomeTab" component={StackRoutes}
                options={{
                    tabBarIcon: ({color, size}) =>{

                        return<Feather name="home" color={color} size={size}/>

                    }

                }}
            
            />
            <Tab.Screen name="Profile" component={Profile}
               options={{
                tabBarIcon: ({color, size}) =>{

                    return<Feather name="user" color={color} size={size}/>

                }

            }}
            
            />
            <Tab.Screen name="Serach" component={Serach}
               options={{
                tabBarIcon: ({color, size}) =>{

                    return<Feather name="search" color={color} size={size}/>

                }

            }}

            />
        </Tab.Navigator>



    )
}

export default AppRoutes;