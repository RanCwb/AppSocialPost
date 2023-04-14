import styled from "styled-components"

export const Container = styled.View`
flex:1;
background-color: #353840;
align-items: center;
`
export const ButtonText = styled.Text`
color: ${props => props.color};
font-size: 18px;
`
export const Button = styled.TouchableOpacity`
margin-top: 15px;
background-color: ${props => props.bg};
width: 80%;
height: 50px;
border-radius: 10px;
align-items: center;
justify-content: center;
`
export const Name= styled.Text`
margin-top: 24px;
margin-right: 20px;
margin-left: 20px;
font-size: 30px;
font-weight: bold;
color: #fff;

`
export const Email= styled.Text`
    color: #fff;
    margin-right: 20px;
    margin-left: 20px;
    margin-top: 10px;
    font-size: 20px;
    font-style: italic;

`
export const Avatar = styled.Image`
width: 160px;
border-radius: 80px;
opacity:0.9 ;

`
export const UploadButton = styled.TouchableOpacity`
margin-top:20%;
background-color: #fff;
width: 165px;
height: 165px;
border-radius: 90px;
justify-content: center;
align-items: center;
z-index: 9;

`
export const UploadText = styled.Text`

    font-size: 60px;
    position: absolute;
    color: #121212;

`
export const ButtonBack = styled.TouchableOpacity`
width: 90%;
height: 50px;
position: absolute;
bottom: 0;
align-items: center;
justify-content: center;
top: 20px;
right:170px;
flex-direction: row;
align-items: center;

`
export const ModalContainer = styled.KeyboardAvoidingView`
width: 100%;
height: 70%;
background-color: #fff;
position: absolute;
bottom: 0;
align-items: center;
justify-content: center;

`
export const Input = styled.TextInput`
width: 90%;
background-color: #DDD;
font-size: 18px;
text-align: center;
border-radius: 8px;

`