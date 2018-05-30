import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View, Button, ListView, Alert
  } from 'react-native'

  export default class MaisEscalados extends Component {
      constructor(props){
          super(props)
          this.state = {
              jogadores:[]
          }
      }
      
    componentDidMount(){
        let url = `https://api.cartolafc.globo.com/mercado/destaques`
        fetch(url)
        .then(sucess => this.setState({jogadores:''}))
        .catch(error => Alert.alert('Busca de jogadores','Erro ao buscar jogadores'))
    } 

    render(){
        return(
            <View>   
                <Text>Mais Escalados</Text>          

                <ListView>

                </ListView>                  
            </View>
        )
    }
  }
