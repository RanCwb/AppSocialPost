import React from "react"
import {Container, Name} from "./styles"
import { useNavigation } from "@react-navigation/native";


function SerachList({data}) {
    

    const navigation = useNavigation()
    


    return(

            <Container onPress={( )=> navigation.navigate('Posts User',{title: data.nome, userID: data.id})}>
                <Name>
                    {data.nome}
                </Name>
            </Container>


    )
}

export default SerachList;