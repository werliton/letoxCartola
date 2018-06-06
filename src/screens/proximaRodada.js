import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View, Button, ListView, Alert, ScrollView
  } from 'react-native'
  
import { Container, Header, Left, Body, Right, Title, Content, Spinner } from 'native-base';

  import CardTime from '../componentes/cardTime'

  export default class ProximaRodada extends Component {
      constructor(props){
          super(props)
          this.state = {
              times:[],
              partidas:[],
              rodada:0,
              loading:true
          }
      }
      
    async componentWillMount(){
        let url = `https://api.cartolafc.globo.com/partidas`
        await fetch(url)
        .then(response => response.json())
        .then( resp => {   
            console.log(resp)   
            this.setState({
                partidas: resp.partidas,
                rodada: resp.rodada
            })
            return resp
        })
        .then( response => {
            let times = []
            
            Object.keys(response.clubes).map(element => {
                times.push(response.clubes[element])
            })

            this.setState({
                times:times,
                loading:false
            })
        })
        .catch(error => Alert.alert('Busca de times','Erro ao buscar times'+error))
    } 

    render(){
        if(!this.state.loading){
            return(
                <Container>
                    <Header>
                    <Left/>
                    <Body>
                        <Title>{this.state.rodada}ª Rodada</Title>
                    </Body>
                    <Right />
                    </Header>
                    <Content>
                        {
                            this.state.partidas.map((partida, key) => 
                                <CardTime partida={partida} key={key} times={this.state.times} />  
                            )
                        }
                    </Content>
                </Container>
            )
        }else{
            return (
                <Container>
                    <Header>
                    <Left/>
                    <Body>
                        <Title>Próxima Rodada</Title>
                    </Body>
                    <Right />
                    </Header>
                    <Content> 
                        <Spinner /> 
                    </Content>
                </Container>
            )
        }          
        
    }
  }
