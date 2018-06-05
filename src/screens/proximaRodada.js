import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View, Button, ListView, Alert, ScrollView
  } from 'react-native'
  
import { Container, Header, Left, Body, Right, Title, Content } from 'native-base';

  import CardTime from '../componentes/cardTime'

  export default class ProximaRodada extends Component {
      constructor(props){
          super(props)
          this.state = {
              times:[],
              partidas:[],
              rodada:0
          }
      }
      
    async componentWillMount(){
        let url = `https://api.cartolafc.globo.com/partidas`
        await fetch(url)
        .then(response => response.json())
        .then( resp => {      
            this.setState({
                times:resp.clubes,
                partidas: resp.partidas,
                rodada:resp.rodada
            })
        })
        .catch(error => Alert.alert('Busca de times','Erro ao buscar times'+error))
    } 

    render(){
        console.log(this.state.partidas)
        console.log(this.state.times)
        return(
            <Container>
                <Header>
                <Left/>
                <Body>
                    <Title>Próxima Rodada</Title>
                </Body>
                <Right />
                </Header>
                <Content>
                    {
                        this.state.partidas.map(partida=>{

                        })
                    }
                    <CardTime />  
                </Content>
            </Container>
        )
    }
  }
