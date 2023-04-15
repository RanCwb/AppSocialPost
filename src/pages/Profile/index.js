import React,{useContext,useState} from "react";
import { View, Text,Modal} from "react-native";
import Header from "../../components/Header";
import {Container, Button,Email, ButtonText,Name,UploadButton,UploadText,Avatar,ModalContainer,Input,ButtonBack} from "./styles"
import { AuthContext } from "../../context/auth";
import Feather from "react-native-vector-icons/Feather" 
import firestore from "@react-native-firebase/firestore"


 function Profile() {


        const {singOut,user,storageUser,setUser,StoryUser } = useContext(AuthContext)
        const {out} = useContext(AuthContext)
        const [nome, setNome] = useState(user?.nome)
        const [url, setUrl] = useState(null)
        const [open, setOpen] = useState(false)

    async function handleOut() {
        
        await out()

    }


    async function updatefile() {

        if (nome === '' ) {
            
            return;
        }
       
        await firestore().collection('users')
        .doc(user?.uid)
        .update({

            nome:nome

        })

        const postDocs = await firestore().collection('posts')
        .where ("userId", '==', user?.uid).get();

        postDocs.forEach( async doc => {

            await firestore().collection('posts').doc(doc.id)
            .update({

                autor:nome 

            })
        })

     
        let data = {

            uid: user.uid,
            nome: nome,
            email: user.email


        }
       
        setOpen(false)
        setUser(data)
        StoryUser(data)
        
      
       

    }

    return(

        <Container>
                <Header/> 
                
                { url ? (

                    <UploadButton>
                        <UploadText>+</UploadText>
                        <Avatar
                        source={{ uri: url}}
                        />
                    </UploadButton>


                ) :(

                    <UploadButton>
                            <UploadText>+</UploadText>
                     </UploadButton>



                )}
                
              

              <Name>{user?.nome}</Name>
              <Email>{user?.email}</Email>

              <Button bg="#e52246" onPress={() => setOpen(true)}>
                <ButtonText color="#fff">Atualizar Perfil</ButtonText>
              </Button>
              <Button bg="#fff" onPress={handleOut}>
                <ButtonText color="#121212">Sair</ButtonText>
              </Button>

                <Modal visible={open} animationType="slide" transparent={true}>
                    <ModalContainer>
                        <ButtonBack  onPress={() => setOpen(false)}>
                            <Feather
                            
                            name="arrow-left"
                            size={30}
                            color="#121212" 
                            
                            /> 
                               <ButtonText color="#121212">Voltar</ButtonText>
                        </ButtonBack>




                        <Input
                        placeholder={user?.nome}
                        value={nome}
                        onChangeText={(text) => setNome(text)}
                        />

                        <Button bg="#e52246" onPress={updatefile}>
                            <ButtonText color="#121212">Salvar</ButtonText>
                        </Button>
                    </ModalContainer>
                </Modal>


        </Container>


    )
}

export default Profile;