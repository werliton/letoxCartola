import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View, Button, ListView, TextInput, Alert
  } from 'react-native'

  export default class Ligas extends Component {
      constructor(props){
          super(props)
          this.state = {
              ligaNome: '',
              ligas:[]
          }
      }
      
    componentDidMount(){
        let url = `https://api.cartolafc.globo.com/ligas?q=${this.state.ligaNome}`
        fetch(url)
        .then(sucess => this.setState({ligas:''}))
        .catch(error => Alert.alert('Busca de ligas','Erro ao buscar ligas'))
    } 

    render(){
        return(
            <View>   
                <TextInput />               
                <Button>Adicionar Liga</Button>

                <ListView>

                </ListView>                  
            </View>
        )
    }
  }
