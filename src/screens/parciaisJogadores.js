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
            this.setState({jogadores:atletas, loading:false})

        })
        .catch(error => Alert.alert('Busca de jogadores','Erro ao buscar jogadores'))
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
                                <Text note>{jogador.pontuacao}</Text>
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
                    <Title>Parciais dos Jogadores</Title>
                </Header>
                <Content>
                    {this.renderContent()}
                </Content>
            </Container>
        )
    }
  }
