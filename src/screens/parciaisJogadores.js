import React, { Component } from 'react'
import {
    Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text, Title
   } from 'native-base'

  export default class ParciaisJogadores extends Component {
    constructor(props){
        super(props)
        this.state = {
            jogadores:[]
        }
    }
  
    async componentDidMount(){
        let url = `https://api.cartolafc.globo.com/atletas/pontuados`
        await fetch(url)
        .then(sucess => sucess.json())
        .then( resp => {
            let atletas = []
            Object.keys(resp.atletas).map( item => {
                atletas.push(resp.atletas[item])
            })
            this.setState({jogadores:atletas})
        })
        .catch(error => Alert.alert('Busca de jogadores','Erro ao buscar jogadores'))
    } 

    render(){
        return(
            <Container>
                <Header>
                    <Title>Parciais dos Jogadores</Title>
                </Header>
                <Content>
                    {
                        this.state.jogadores.map(jogador => 
                            <List>
                                <ListItem avatar>
                                    <Left>
                                        <Thumbnail source={{ uri: `${jogador.foto}` }} />
                                    </Left>
                                    <Body>
                                        <Text>{jogador.apelido}</Text>
                                    </Body>
                                    <Right>
                                        <Text note>{jogador.pontuacao}</Text>
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
