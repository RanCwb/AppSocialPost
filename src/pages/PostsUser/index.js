import React,{useLayoutEffect,useState,useCallback,useContext}from "react";
import { View, Text,ActivityIndicator} from "react-native";
import {useRoute,useNavigation,useFocusEffect} from '@react-navigation/native'
import firestore from "@react-native-firebase/firestore"
import PostList from "../../components/PostsList";
import {Container,ListPosts  } from "./styles";
import { AuthContext } from "../../context/auth";



function PostsUser() {

    const route = useRoute();
    const navigation = useNavigation();
    const [title, seTitle] = useState(route.params?.title)
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    const {user}  = useContext(AuthContext)

    useLayoutEffect(()=>{

        navigation.setOptions({

            title: title === '' ? '' : title

        })

    },[navigation, title])

    useFocusEffect(
        useCallback(() =>{

            let isactive = true



            firestore()
            .collection('posts')
            .where('user', '==', route.params?.userID)
            .orderBy('created', 'desc')
            .get()
            .then((snapshot) => {

                const postList = []

                snapshot.docs.map((best) =>{

                    postList.push({

                        ...best.data(),
                        id: best.id

                    })    


                })

                if (isactive) {
                    setPosts(postList)
                    setLoading(false)
                }

                console.log(postList)
            })




            return() =>{

                isactive = false

            }


        },[])

    )

    return(

        <Container>
          {loading ?  (

            <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
                <ActivityIndicator size={80} color="#e52246"/>
            </View>


          ) : (


            <ListPosts
                showsVerticalScrollIndicator={false}
                data={posts}
                renderItem={({item}) =>  <PostList data={item} userId={user.uid}/> }
            />


          )}
        </Container>


    )
}


export default PostsUser;