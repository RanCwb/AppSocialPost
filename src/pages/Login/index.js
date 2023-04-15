import React,{useContext, useState} from "react";
import { View, Text,ActivityIndicator } from "react-native";
import { Container,Title,Input,Button,ButtonText,Register,RegisterText } from "./styles";
import { AuthContext } from "../../context/auth";
import * as Animatable from  "react-native-animatable"
 function Login() {

    const [login,setLogin] = useState(true)
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const {register,loggin,loadingAuth} = useContext(AuthContext)
    
    const TitleAnimation = Animatable.createAnimatableComponent(Title)


        function changeLogin() {

            setLogin(!login)
            setName('')
            setPassword('')
            setEmail('')
        }
        

       async function singIn() {
            
            if( email === '' || password === ''){

                console.log('Preencha os campos!')
                
                return;

            }
            
            await loggin(email,password)

        }

       async function singUp() {

          if (name === '' || email === '' || password === '') {
            
            console.log('PREENCHA OS DADOS DE CADASTRO!')
        
            return;
          }
          await register(email, password, name)
            
        }

        if(login){

            return(

                <Container>
                    <TitleAnimation animation="zoomIn">Social<TitleAnimation style={{fontSize:60, color:'#e52246'}}>Post</TitleAnimation> </TitleAnimation>
        
        
                    <Input
                    placeholder="Email"    
                    value={email}
                    onChangeText={(e) => setEmail(e)}
                    />
        
                    <Input
                    placeholder="Senha"      
                    value={password}
                    onChangeText={(e) => setPassword(e)}
                    secureTextEntry={true}
                    />
        
        
                    <Button onPress={() => singIn() }>
                        {loadingAuth ? (

                            <ActivityIndicator size={30} color={"#e52246"}/>


                        ) : (

                        <ButtonText>Acessar</ButtonText>
                        
                        ) }
                   
                    </Button>
        
                    <Register onPress={() => changeLogin()}>
                            <RegisterText>Crie sua conta já!</RegisterText>
                    </Register>
        
                </Container>
        
        
            )
        }



    return(

        <Container>
            <TitleAnimation>Social<TitleAnimation style={{fontSize:60, color:'#e52246'}}>Post</TitleAnimation> </TitleAnimation>


            <Input
            placeholder="Seu nome"    
            value={name}
            onChangeText={(text) => setName(text)}
           
            />

            <Input
            placeholder="Seu Email"    
            value={email}
            onChangeText={(text) => setEmail(text)}
            />

            
            <Input
            placeholder="Sua Senha"    
            value={password}
            onChangeText={(text) => setPassword(text)}
            
            
            />      


            <Button onPress={() => singUp()}>

                <ButtonText>Cadastrar</ButtonText>

            </Button>

            <Register onPress={() => changeLogin()}>
                    <RegisterText>Já possuo uma conta!</RegisterText>
            </Register>

        </Container>


    )
}

export default Login;