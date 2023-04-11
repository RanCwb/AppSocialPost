import React,{useState}from "react"
import {Container,Name,Header,Avatar,ContentView,Content,LikeButton,Like,Actions,TimePost}  from "./styles"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import {formatDistance} from 'date-fns'
import {ptBR} from 'date-fns/locale'
function PostList({data,userId}) {
    
    const [likePost,setLikePost] = useState(data?.likes)

    function timePost() {
        // console.log(new Date(data.created.seconds * 1000))

        const datepost = new Date(data.created.seconds * 1000)

        return formatDistance(

           new Date(),
           datepost,
           {locale:ptBR}

        )

    }
    
    return(

        <Container>
            <Header>

                {data.avatarUrl? (

                    <Avatar
                    source={{uri:data.avatarUrl}}
                    />  


                ):(

                    <Avatar
                    source={require('../../assets/avatar.png')}
                    />


                )}

            
                <Name numberOfLines={1}>
                    {data?.autor}
                </Name>
            </Header>

            <ContentView>

                <Content>
                  {data?.content}
                </Content>

            </ContentView>

            <Actions>
                <LikeButton>
                    <Like>

                        {likePost === 0 ? " " : likePost}


                    </Like>
                    <MaterialCommunityIcons
                    name={likePost === 0 ? "heart-plus-outline" : 'cards-heart'}
                    size={20}
                    color="#e52246"
                    />

                </LikeButton>
                    <TimePost>
                        {timePost()}
                    </TimePost>
            </Actions>

        </Container>


    )

}


export default PostList;