import React, { Component } from 'react'
import { Container, Header, Content, Card, CardItem, Text, Icon, Right, Title, Body } from 'native-base';

  export default class Home extends Component{

    constructor(props){
        super(props)
        this.state = {
            menuOpen:[
                {
                    'nome':'Ligas',
                    'icon':'ios-people',
                    'type':'Ionicons',
                    'color':'',
                    'link':'Ligas'
                },
                {
                    'nome':'Time Favorito',
                    'icon':'sports-club',
                    'type':'Entypo',
                    'link':'Favoritos'
                },
                {
                    'nome':'Rodada Atual',
                    'icon':'results',
                    'type':'Foundation'
                },
            ],
            menuClose:[
                {
                    'nome':'Mais escalados',
                    'icon':'logo-googleplus'
                },
                {
                    'nome':'Parciais do Jogadores',
                    'icon':'logo-googleplus'
                },
            ]
        }
    }

    render(){
        const {navigate} = this.props.navigation
        return(
            <Container>
            <Header>
                <Body>
                <Title>Letox Cartola</Title>
                </Body>
            </Header>
            <Content>
            <Card>
                {
                    this.state.menuOpen.map((item,key) => 
                        <CardItem key={key} bordered onPress={()=> navigate(item.link)}>
                            <Icon active name={item.icon} type={item.type}/>
                            <Text>{item.nome}</Text>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </CardItem>
                    )
                }
                                
            </Card>
            </Content>
        </Container>
        )
    }
  }
