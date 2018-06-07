import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View, Button, Alert
  } from 'react-native'
import { Container, Header, Content, Form, Item, Input, Title, List, ListItem, Thumbnail, Body, Icon, Right } from 'native-base';

export default class FavoritoDetalhe extends Component {
      constructor(props){
          super(props)
          this.state = {
              atletas:[],
              clubes:[],
              capitao:'',
              pontos:'',
              escudo:''
          }
      }

    async componentWillMount(){
        //let url = `https://api.cartolafc.globo.com/time/slug/${this.props.slug}`
        let url = `https://api.cartolafc.globo.com/time/slug/letox-fc`
        await fetch(url)
        .then(sucess => sucess.json())
        .then(response => {
            let atletas = []
            response.atletas.forEach(atleta =>{
                atletas.push(atleta)
            })
            // Ordenando lista de atletas
            atletas =  atletas.sort((a, b )=> a.posicao_id - b.posicao_id)
            this.setState({
                atletas,
                capitao:response.capitao_id,
                pontos:response.pontos
            })
            return response
        })
        .then(response => {
            let clubes = []
            Object.keys(response.clubes).map(element =>{
                clubes.push(response.clubes[element])
            })         

            this.setState({clubes})
        })
        .catch(error => Alert.alert('Busca de atletas','Erro ao buscar atletas:'+error))
    }

    isCapita(atletaId){        
        if(atletaId === this.state.capitao)
            return <Text style={{color:'#f4a041', fontWeight:'bold'}}>Capita</Text>
    }

    renderEscudo(clubeId){
        let clubes = this.state.clubes.filter(clube => clube.id === clubeId) 
        let escudos = []
        clubes.forEach(clubes =>{
            Object.keys(clubes.escudos).map(item =>{
                escudos.push(clubes.escudos[item])
            })
        })
        return <Thumbnail square size={20} source={{ uri: escudos[0] }} />
    }

    render(){
        return(
            <Container>
                <Header><Title>Time montado - {Math.ceil(this.state.pontos,-1)}</Title></Header>
                <Content>
                    <List>
                        {
                            this.state.atletas.map((atleta, key) => 
                                <ListItem key={key}>
                                    {this.renderEscudo(atleta.clube_id)}
                                    <Body>
                                        <Text>{atleta.apelido} {this.isCapita(atleta.atleta_id)} </Text>
                                    </Body>
                                    <Right>
                                        <Text note>Média: {atleta.media_num}</Text>
                                        <Icon name="arrow-forward" />
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
