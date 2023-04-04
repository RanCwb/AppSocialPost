import React,{useContext} from "react";
import { View, Text,Button } from "react-native";
import { AuthContext } from "../../context/auth";



 function Profile() {

        const {out} = useContext(AuthContext)


    async function handleOut(params) {
        
        await out()

    }

    return(

        <View>
            <Text>Tela PERFIL</Text>
           <Button  title="sair" onPress={handleOut}>
            Deslogar
           </Button>
        </View>


    )
}

export default Profile;