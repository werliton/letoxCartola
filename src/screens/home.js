import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View
  } from 'react-native'

  export default class Home extends Component{

    componentWillMount(){

    }

    render(){
        return(
            <View>                  
                <Text>MERCADO ABERTO</Text>
                <Text>Status do mercado</Text>
                <Text>Ligas</Text>
                <Text>Time Favorito</Text>
                <Text>Rodada Atual</Text>
                <Text>Parciais do Jogadores</Text>

                <Text>MERCADO FECHADO</Text>
                <Text>Mais escalados</Text>
                <Text>Próximas Partidas</Text>                  
            </View>
        )
    }
  }
