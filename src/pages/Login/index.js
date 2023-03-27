import React,{useState} from "react";
import { View, Text } from "react-native";
import { Container,Title,Input,Button,ButtonText,Register,RegisterText } from "./styles";


 function Login() {

    const [login,setLogin] = useState(true)
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

        function changeLogin() {

            setLogin(!login)
            setName('')
            setPassword('')
            setEmail('')
        }
        

        function singIn() {
            
            if( email === '' || password === ''){

                console.log('Preencha os campos!')
                
                return;

            }
            

        }

        function singUp() {

          if (name ==='' || email === '' || password === '') {
            
            console.log('PREENCHA OS DADOS DE CADASTRO!')
        
            return;
          }

            
        }

        if(login){

            return(

                <Container>
                    <Title>Social<Text style={{fontSize:60, color:'#FFA500'}}>Post</Text> </Title>
        
        
                    <Input
                    placeholder="seuemail"    
                    value={email}
                    onChangeText={(e) => setEmail(e)}
                    />
        
                    <Input
                    placeholder="suasenha"      
                    value={password}
                    onChangeText={(e) => setPassword(e)}
                    />
        
        
                    <Button onPress={() => singIn() }>
        
                        <ButtonText>Acessar</ButtonText>
        
                    </Button>
        
                    <Register onPress={() => changeLogin()}>
                            <RegisterText>Crie sua conta já!</RegisterText>
                    </Register>
        
                </Container>
        
        
            )
        }



    return(

        <Container>
            <Title>Social<Text style={{fontSize:60, color:'#FFA500'}}>Post</Text> </Title>


            <Input
            placeholder="Seu nome"    
            value={name}
            onChangeText={(t) => setName(t)}
           
            />

            <Input
            placeholder="Seu Email"    
            value={email}
            onChangeText={(t) => setEmail(t)}
            />

            
            <Input
            placeholder="Sua Senha"    
            value={password}
            onChangeText={(t) => setEmail(t)}
            
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