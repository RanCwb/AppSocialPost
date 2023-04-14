import React,{useState,useContext,useCallback} from "react";
import { View, Text,ActivityIndicator } from "react-native";
import { Container, ButtonPost,PostsList} from "./styles";
import Feather from 'react-native-vector-icons/Feather'
import {useNavigation,useFocusEffect, } from "@react-navigation/native"
import Header from "../../components/Header";
import { AuthContext } from "../../context/auth";
import firestore from "@react-native-firebase/firestore"
import PostList from "../../components/PostsList";


 function Home() {

    const navigation = useNavigation();
    const  {user} = useContext(AuthContext)
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)

    const [refresh, setRefresh] = useState(false)
    const [lastItem, setLastItem] = useState('')
    const [emptyList, setemptyList] = useState(false)
    
    useFocusEffect(
        useCallback (() => {

            let isActive = true

            function find() {
                
               firestore().collection('posts')
                .orderBy('created','desc')
                .limit(5)
                .get()
                .then((snapshot)=>{

                   if (isActive) {
                    
                    setPosts([]);
                    const postList = []

                    snapshot.docs.map( p =>{

                        postList.push({

                            ...p.data(),
                            id:p.id
                        })
                        

                    })
                    
                    setPosts(postList)
                    setLastItem(snapshot.docs[snapshot.docs.length -1 ])
                    setemptyList(!!snapshot.emptyList)
                    setLoading(false)


                   }
                  
                })

            }

            find();

            return(() =>{

                isActive = false
            })

        },[])

      
    )

    async function getList() {

        if (emptyList) {

            setLoading(false)

            return null;
        }

        if (loading) return;
          
        firestore().collection('posts')
        .orderBy('created', 'desc')
        .limit(5)
        .startAfter(lastItem)
        .get()
        .then((snapshot) => {

            const listPosts  = []

            snapshot.docs.map( u  => {

                listPosts.push({

                    ...u.data(),
                    id :u.id,

                })  

            })

            setemptyList(!!snapshot.emptyList)
            setLastItem(snapshot.docs[snapshot.docs.length - 1])
            setPosts(oldPosts => [...oldPosts, ...listPosts])   
            setLoading(false)


        })

        
    } 

   async function handleref() {
       setRefresh(true) 

       firestore().collection('posts')
                .orderBy('created','desc')
                .limit(5)
                .get()
                .then((snapshot)=>{

                 
                    
                    setPosts([]);
                    const postList = []

                    snapshot.docs.map( t =>{

                        postList.push({

                            ...t.data(),
                            id:t.id
                        })
                        

                    })
                    
                    setPosts(postList)
                    setLastItem(snapshot.docs[snapshot.docs.length -1 ])
                    setemptyList(false)
                    setLoading(false)

                })
                

                setRefresh(false)

    }



    return(

        <Container>
            <Header/>
            
           {loading ? (


            <View style={{ flex:1, justifyContent:'center', alignItems:'center'}}>
                <ActivityIndicator size={60} color="#e52246"/>
            </View>


           ): (


            <PostsList
            showsVerticalScrollIndicator={false}
            data={posts}
            renderItem={({item}) => ( <PostList
                
                data={item}
                userId={user?.uid}
                
                
            />
             )}
        
                refreshing={refresh}
                onRefresh={handleref}
               onEndReached={()=> getList()}
        
            />


           )}

          
              

            <ButtonPost
            onPress={() => navigation.navigate("NewPost")}
            
            > 
                <Feather
                    name="edit-2"
                    color="#fff"
                    size={25}
                />  
            </ButtonPost>

        </Container>


    )
}

export default Home;