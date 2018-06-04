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
            console.log(resp)
            //this.setState({jogadores:resp.atletas})
        })
        .catch(error => Alert.alert('Busca de jogadores','Erro ao buscar jogadores'))
    } 

    render(){
        console.log(this.state.jogadores)
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
                                        <Text style={{fontSize:12}}>{jogador.pontuacao} escalações</Text>
                                    </Body>
                                    <Right>
                                        <Text note>{jogador.posicao_id}</Text>
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
