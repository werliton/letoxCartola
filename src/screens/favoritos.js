import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View, Button, ListView, TextInput, Alert
  } from 'react-native'

  export default class Favoritos extends Component {
      constructor(props){
          super(props)
          this.state = {
              timeNome: '',
              times:[]
          }
      }
      
    componentDidMount(){
        let url = `https://api.cartolafc.globo.com/time/slug/${this.state.timeNome}`
        fetch(url)
        .then(sucess => this.setState({times:''}))
        .catch(error => Alert.alert('Busca de times','Erro ao buscar times'))
    } 

    render(){
        return(
            <View>   
                <TextInput />               
                <Button>Adicionar time</Button>

                <ListView>

                </ListView>                  
            </View>
        )
    }
  }
