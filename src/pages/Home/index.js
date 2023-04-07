import React,{useState} from "react";
import { View, Text } from "react-native";
import { Container, ButtonPost,PostsList} from "./styles";
import Feather from 'react-native-vector-icons/Feather'
import {useNavigation} from "@react-navigation/native"
import Header from "../../components/Header";

 function Home() {


    const navigation = useNavigation();
    const [posts, setPosts] = useState([
       { id: '1', content : 'teste 1'},
       { id: '2', content : 'teste 2'},
       { id: '3', content : 'teste 3'},
       { id: '4', content : 'teste 4'},

    ])

    return(

        <Container>
            <Header/>

            <PostsList
                data={posts}
                renderItem={({item}) => ( <Text>TESTE</Text> )}
            
            
            />
              

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