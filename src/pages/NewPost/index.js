import React, {useState ,useLayoutEffect,useContext} from "react";
import {useNavigation  } from "@react-navigation/native";
import { Container,Input,Button,ButtonText } from "./styles";
import firestore from '@react-native-firebase/firestore'
import storage from '@react-native-firebase/storage'
import { AuthContext } from "../../context/auth";
function NewPost() {

        const [post, setPost] = useState('')
        const navigation = useNavigation()
        const {user} = useContext(AuthContext)

        useLayoutEffect (() =>{

            const options  = navigation.setOptions({

              headerRight: () => (

                <Button onPress={() => handePpost()}>
                  <ButtonText>Compartilhar</ButtonText>
                </Button>


              
              )

            })



        }, [navigation, post])

        async function handePpost(){

          if (post ===" ") {

            console.log("post vazio")

            return;
          }

          let  avatarUrl = null

          try{
            
            let response = await storage().ref('users').child(user ?.uid).getDownloadURL();

            avatarUrl = response

          }catch(err){

            avatarUrl = null


          }
          
          await firestore().collection('posts')
          .add({

            created: new Date(),
            content: post,
            autor: user?.nome,
            user : user?.uid,
            likes: 0,
            avatarUrl,

          })
          .then(() => {

            setPost('')
            console.log('post criado com sucesso')

          })
          .catch ((err ) =>{

            console.log('erro ao criar post ' + err)


          })

          navigation.goBack();
        }


    return(

        <Container>
          <Input
          placeholder="Oque está pensando ?"
          value={post}
          onChangeText={(text) => setPost(text)}
          autoCorrect={false}
          multiline={true}
          placeholderTextColor="black"
          maxLenght={300}
          />
        </Container>


    )
}

export default NewPost;