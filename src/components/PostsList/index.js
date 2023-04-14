import React,{useState}from "react"
import {Container,Name,Header,Avatar,ContentView,Content,LikeButton,Like,Actions,TimePost}  from "./styles"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import {formatDistance} from 'date-fns'
import {ptBR} from 'date-fns/locale'
import firestore from '@react-native-firebase/firestore'
import { Alert } from "react-native/types"
import {useNavigation} from '@react-navigation/native'


function PostList({data,userId}) {
    const navigation = useNavigation();
    const [likePost,setLikePost] = useState(data?.likes)

   

    function timePost() {

        const datepost = new Date(data.created.seconds * 1000)

        return formatDistance(

           new Date(),
           datepost,
           {locale:ptBR}

        )

    }

   async  function HandleLikePost(id, likes) {
       
       const doID = `${userId}_${id}`

        const doc = await firestore().collection('likes')
        .doc(doID).get();

        if (doc.exists) {
            
            await firestore().collection('posts')
            .doc(id).update({

                likes : likes - 1

            })

            await firestore().collection('likes').doc(doID)
            .delete()
            .then(()=> {

                setLikePost(likes - 1)

            })

            return;
        }

         await firestore().collection('likes')
        .doc(doID).set({

            postId : id,
            userId: userId

        })

        await firestore().collection('posts')
        .doc(id).update({

            likes : likes + 1


        })
        .then(() =>{

            setLikePost(likes + 1)


        })

        

        




    }


    
    return(

        <Container>
            <Header onPress={() =>navigation.navigate("Posts User",{title :data.autor, userID: data.user})}>

                {data.avatarUrl? (

                    <Avatar
                    source={{uri:data.avatarUrl}}
                    />  


                ):(

                    <Avatar
                    source={require('../../assets/avatar.png')}
                    />


                )}

            
                <Name numberOfLines={1}>
                    {data?.autor}
                </Name>
            </Header>

            <ContentView>

                <Content>
                  {data?.content}
                </Content>

            </ContentView>

            <Actions>
                <LikeButton onPress={() => HandleLikePost(data.id, likePost)}>
                    <Like>

                        {likePost === 0 ? " " : likePost}


                    </Like>
                    <MaterialCommunityIcons
                    name={likePost === 0 ? "heart-plus-outline" : 'cards-heart'}
                    size={20}
                    color="#e52246"
                    />

                </LikeButton>
                    <TimePost>
                        {timePost()}
                    </TimePost>
            </Actions>

        </Container>


    )

}


export default PostList;