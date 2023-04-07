import React from 'react'
import {  View,Text} from "react-native";
import  { Container, Title} from './styles'
export default function Header() {
    return(

        <Container>

            <Title>
              Social
                <Text style={{fontStyle:'italic', color:'#121212', fontWeight:'bold'}}>Post</Text>
            </Title>

        </Container>

    )
    
}