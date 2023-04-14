import React,{useState,useEffect}from "react";
import { View, Text } from "react-native";
import {Container,AreaInput,Input,List} from "./styles"
import Feather from "react-native-vector-icons/Feather"
import firestore from "@react-native-firebase/firestore"
import SerachList from "../../components/SerachList";

 function Serach() {    

    const [input, setInput] = useState('')
    const [users,setUsers] = useState([])


    useEffect(() => {
        if (input === '' || input === undefined) {
            setUsers([]);
            return;
        }
    
        const fast = firestore().collection('users')
        .where('nome', '>=', input)
        .where('nome', '<=', input, "\uf8ff")
        .onSnapshot( snapshot => {

            const listUsers = [];

            snapshot.forEach(doc => {

                listUsers.push({

                    ...doc.data(),
                    id: doc.id

                })

            })

            setUsers(listUsers)

        })
    
    
    },[input])


    return(

        <Container>
            <AreaInput>
                <Feather
                    name="search"
                    size={23}
                    color="#e52246"

                />
                <Input
                    placeholder="Procure alguém!"
                    placeholderTextColor="#353840"
                    value={input}
                    onChangeText={(text) => setInput(text)}
                />  
            </AreaInput>
                <List
                    data={users}
                    renderItem={({item}) => <SerachList data={item}/>}

                
                />

        </Container>


    )
}

export default Serach;