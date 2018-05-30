import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View, ListView, TextInput, Alert
  } from 'react-native'

  export default class ParciaisJogadores extends Component {
    constructor(props){
        super(props)
        this.state = {
            jogadores:[]
        }
    }
      
    componentDidMount(){
        let url = `https://api.cartolafc.globo.com/atletas/pontuados`
        fetch(url)
        .then(sucess => this.setState({times:''}))
        .catch(error => Alert.alert('Busca de times','Erro ao buscar times'))
    } 

    render(){
        return(
            <View>            
                <Text>Parciais dos Jogadores</Text>

                <ListView>

                </ListView>                  
            </View>
        )
    }
  }
