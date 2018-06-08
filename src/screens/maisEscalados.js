import React, { Component } from 'react'
import { Alert } from 'react-native'
import {
   Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text, Title, Spinner
  } from 'native-base'

  export default class MaisEscalados extends Component {
      constructor(props){
          super(props)
          this.state = {
              jogadores:[], load:true
          }
      }
      
    async componentDidMount(){
        let url = `https://api.cartolafc.globo.com/mercado/destaques`
        await fetch(url)
        .then(sucess => sucess.json())
        .then( resp => {
            let atletas = []
            resp.forEach(el => {
               atletas.push(el)
            })
            this.setState({jogadores:atletas, load:false})
        })
        .catch(error => Alert.alert('Busca de jogadores','Erro ao buscar jogadores'))
    } 

    render(){
        if(this.state.load){
            return (
                <Container>
                    <Header>
                        <Left/>
                        <Body>
                            <Title>Mais Escalados</Title>
                        </Body>
                    <Right />
                    </Header>
                    <Content> 
                        <Spinner /> 
                    </Content>
                </Container>
            )
        }
        return(
            <Container>
                <Header>
                    <Body>
                    <Title>Mais Escalados</Title>
                    </Body>
                </Header>
                <Content>
                    <List>
                    {
                        this.state.jogadores.map((jogador, key) => 
                            <ListItem avatar key={key}>
                                <Left>
                                    <Thumbnail square size={10} source={{ uri: `${jogador.escudo_clube}` }} />
                                </Left>
                                <Body>
                                    <Text>{jogador.Atleta.apelido}</Text>
                                    <Text style={{fontSize:12}}>{jogador.escalacoes} escalações</Text>
                                </Body>
                                <Right>
                                    <Text note>{jogador.posicao}</Text>
                                </Right>
                            </ListItem>
                        )
                    }
                    </List>
                </Content>
            </Container>
        )
    }
  }
