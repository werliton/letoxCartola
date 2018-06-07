import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View, Button, Alert
  } from 'react-native'
import { Container, Header, Content, Form, Item, Input, Title, List, ListItem, Thumbnail, Body } from 'native-base';

export default class FavoritoDetalhe extends Component {
      constructor(props){
          super(props)
          this.state = {
              atletas:[],
              capitao:'',
              pontos:''
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

            this.setState({
                atletas,
                capitao:response.capitao_id,
                pontos:response.pontos
            })
            
        })
        .then()
        .catch(error => Alert.alert('Busca de atletas','Erro ao buscar atletas:'+error))
    }

    isCapita(atletaId){        
        if(atletaId === this.state.capitao)
            return <Text style={{color:'#f4a041', fontWeight:'bold'}}>Capita</Text>
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
                                    <Thumbnail square size={80} source={{ uri: atleta.foto }} />
                                    <Body>
                                        <Text>{atleta.apelido} {this.isCapita(atleta.atleta_id)} </Text>
                                        <Text note>Média: {atleta.media_num}</Text>
                                    </Body>
                                </ListItem>
                            )        
                        }
                    </List>
                </Content>
            </Container>
        )
    }
  }
