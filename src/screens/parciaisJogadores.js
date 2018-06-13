import React, { Component } from 'react'
import {
    Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text, Title, Spinner
   } from 'native-base'

  export default class ParciaisJogadores extends Component {
    constructor(props){
        super(props)
        this.state = {
            jogadores:[], loading: true
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
            atletas = atletas.sort((a, b) => b.pontuacao - a.pontuacao)

            this.setState({jogadores:atletas, loading:false})

        })
        .catch(error => Alert.alert('Busca de jogadores','Erro ao buscar jogadores'))
    } 

    renderPontuacao(pontuacao){
        if(pontuacao > 0){
            return (
                <Text note style={{color:'green', fontWeight: 'bold', fontSize: 12,}}>{pontuacao}</Text>
            )
        }
        return (
            <Text note style={{color:'red', fontWeight: 'bold', fontSize: 12,}}>{pontuacao}</Text>
        )
    }

    renderContent(){
        if(this.state.loading){
            return <Spinner />
        }
        return (
            <List>
                {
                this.state.jogadores.map((jogador,key) => 
                        <ListItem avatar key={key}>
                            <Left>
                                <Thumbnail source={{ uri: `${jogador.foto}` }} />
                            </Left>
                            <Body>
                                <Text>{jogador.apelido}</Text>
                            </Body>
                            <Right>
                                {this.renderPontuacao(jogador.pontuacao)}
                            </Right>
                        </ListItem>
                )
            }
           </List>
        )
    }

    render(){
        return(
            <Container>
                <Header>
                    <Body>
                        <Title>Parciais dos Jogadores</Title>
                    </Body>
                </Header>
                <Content>
                    {this.renderContent()}
                </Content>
            </Container>
        )
    }
  }
