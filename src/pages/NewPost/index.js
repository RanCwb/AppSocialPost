import React, {useState ,useLayoutEffect} from "react";
import {useNavigation  } from "@react-navigation/native";
import { Container,Input,Button,ButtonText } from "./styles";

function NewPost() {

        const [post, setPost] = useState('')
        const navigation = useNavigation()

        useLayoutEffect (() =>{

            const options  = navigation.setOptions({

              headerRight: () => (

                <Button>
                  <ButtonText>Compartilhar</ButtonText>
                </Button>


              
              )

            })



        }, [navigation, post])


    return(

        <Container>
          <Input
          placeholder="Oque está pensando ?"
          value={post}
          onChangeText={(text) => setPost(text)}
          autoCorrect={false}
          multiline={true}
          placeholderTextColor="#ddd"
          maxLenght={300}
          />
        </Container>


    )
}

export default NewPost;