import React,{useContext,useState,createContext,useEffect}from "react"
import  auth from "@react-native-firebase/auth"
import firestore from "@react-native-firebase/firestore"
import AsyncStorage from "@react-native-async-storage/async-storage"



export const AuthContext = createContext({})


function AuthProvider({children}) {

    const [user, setUser] = useState(null)

    const [loadingAuth, setLoadingAuth] = useState(false)

    const [loading, setloading] = useState(true)


    useEffect (() => {
        async function loadStorage() {
            
            const storageUser = await AsyncStorage.getItem('@devsocial')

            if(storageUser){

                setUser(JSON.parse(storageUser))

                setloading(false)
            }
             setloading(false)
        }
        
        loadStorage();
    },[])



    async function register(email,password,name) {

        setLoadingAuth(true)

        await auth().createUserWithEmailAndPassword(email, password)
        .then( async(value) => {

            let uid = value.user.uid

            await firestore().collection('users')
            .doc(uid).set({

                nome: name,
                createdAt : new Date(),
                
            })
            .then (() => {

                let data ={

                    uid: uid,
                    nome : name,
                    email: value.user.email,
                    
                }

                setUser(data)
                StoryUser(data)
                setLoadingAuth(false)
            })


        })
        .catch((error) => {

            console.log(error)
            setLoadingAuth(false)

        })
        
    }


    async function loggin (email, password) {

        setLoadingAuth(true)

        await auth().signInWithEmailAndPassword(email,password)
        .then( async (value) => {

            let uid = value.user.uid
            
            const userProfile = await firestore().collection('users')
            .doc(uid).get()

            let data ={

                uid : uid,
                nome: userProfile.data().nome,
                email: value.user.email

            }

            setUser(data)
            StoryUser(data)
            setLoadingAuth(false)

        })

        .catch ((error) =>{

            console.log(error)
            setLoadingAuth(false)

        })
    }

    async function out() {

        await auth().signOut();
        await AsyncStorage.clear()
        .then(() => {

            setUser(null)


        })
        
    }


    async function StoryUser(data) {
        
        await AsyncStorage.setItem("@devsocial", JSON.stringify(data))

    }

      
    
    return(
        <AuthContext.Provider value={{singed: !!user,register,out, loggin,loadingAuth,loading}}>

            {children}

        </AuthContext.Provider>
    )


}


export default AuthProvider