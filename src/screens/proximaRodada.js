import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View, Button, ListView, Alert
  } from 'react-native'
  
import { Container, Header, Left, Body, Right, Title } from 'native-base';

  import CardTime from '../componentes/cardTime'

  export default class ProximaRodada extends Component {
      constructor(props){
          super(props)
          this.state = {
              times:[]
          }
      }
      
    componentWillMount(){
        let url = `https://api.cartolafc.globo.com/partidas`
        fetch(url)
        .then(sucess => {
            console.log(sucess.json())
            this.setState({times:''})
        })
        .catch(error => Alert.alert('Busca de times','Erro ao buscar times'))
    } 

    render(){
        return(
            <Container>
                <Header>
                <Left/>
                <Body>
                    <Title>Próxima Rodada</Title>
                </Body>
                <Right />
                </Header>
                <CardTime />    
            </Container>
        )
    }
  }
