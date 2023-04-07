import styled from "styled-components"


export const Container = styled.View`

background-color: white	;
flex: 1;

`

export const ButtonPost = styled.TouchableOpacity`
position: absolute;
bottom: 5%;
right : 7%;
width: 60px;
height: 60px;
background-color: #e52246;
border-radius : 30px;
align-items: center;
justify-content:center;
z-index:99;

`
export const PostsList = styled.FlatList`

flex: 1;
background-color: #f1f1f1;


`