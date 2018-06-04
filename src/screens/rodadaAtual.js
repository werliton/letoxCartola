import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View, Button, ListView, Alert
  } from 'react-native'
  import BlockTime from '../componentes/blockTime'

  export default class RodadaAtual extends Component {
      constructor(props){
          super(props)
          this.state = {
              times:[]
          }
      }
      
    componentDidMount(){
        let url = `https://api.cartolafc.globo.com/mercado/destaques`
        fetch(url)
        .then(sucess => {
            this.setState({times:''})
            console.log(sucess)
        })
        .catch(error => Alert.alert('Busca de times','Erro ao buscar times'))
    } 

    render(){
        return(
            <View style={{flex:1, padding:5}}>
                <View style={{flex:1}}>
                    <Text>Você pode ver as pasrciais dos jogadores quando um jogo iniciar, clicando em uma partida!</Text>
                </View>
                <BlockTime />
            </View>
        )
    }
  }
