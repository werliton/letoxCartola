import React, { Component } from 'react'
import {
   Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text, Title
  } from 'native-base'

  export default class MaisEscalados extends Component {
      constructor(props){
          super(props)
          this.state = {
              jogadores:[]
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
            this.setState({jogadores:atletas})
        })
        .catch(error => Alert.alert('Busca de jogadores','Erro ao buscar jogadores'))
    } 

    render(){
        console.log(this.state.jogadores)
        return(
            <Container>
                <Header>
                    <Title>Mais Escalados</Title>
                </Header>
                <Content>
                    {
                        this.state.jogadores.map(jogador => 
                            <List>
                                <ListItem avatar>
                                    <Left>
                                        <Thumbnail source={{ uri: `${jogador.Atleta.escudo_clube}` }} />
                                    </Left>
                                    <Body>
                                        <Text>{jogador.Atleta.apelido}</Text>
                                        <Text>{jogador.clube}</Text>
                                    </Body>
                                    <Right>
                                        <Text note>{jogador.posicao}</Text>
                                    </Right>
                                </ListItem>
                            </List>
                        )
                    }
                    
                </Content>
            </Container>
        )
    }
  }
