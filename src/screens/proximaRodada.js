import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View, Button, ListView, Alert
  } from 'react-native'

  export default class ProximaRodada extends Component {
      constructor(props){
          super(props)
          this.state = {
              times:[]
          }
      }
      
    componentDidMount(){
        let url = `https://api.cartolafc.globo.com/partidas`
        fetch(url)
        .then(sucess => this.setState({times:''}))
        .catch(error => Alert.alert('Busca de times','Erro ao buscar times'))
    } 

    render(){
        return(
            <View>   
                <Text>Próximas Rodadas</Text>          

                <ListView>

                </ListView>                  
            </View>
        )
    }
  }
