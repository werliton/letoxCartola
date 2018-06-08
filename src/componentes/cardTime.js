import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, Badge, View } from 'native-base';
import Time from './time'

export default class CardTime extends Component{

  constructor(props){
    super(props)
    this.state = {
      clubeCasa:'', clubeVisita:'', escudoCasa:'', escudoVisita:''
    }
  }

  async componentWillMount(){
    console.log(this.props.partida.aproveitamento_visitante +'-'+ this.props.partida.aproveitamento_visitante.reverse());
    
    
    let clubeCasa     = this.props.times.filter(time => time.id === this.props.partida.clube_casa_id)
    let clubeVisita   = this.props.times.filter(time => time.id === this.props.partida.clube_visitante_id)
    let escudosCasa   = []
    let escudosVisita = []

    await clubeCasa.forEach(element => {
      Object.keys(element.escudos).map(ele => {
        escudosCasa.push(element.escudos[ele])      
      })
    })
    await clubeVisita.forEach(element => {
      Object.keys(element.escudos).map(ele => {
        escudosVisita.push(element.escudos[ele])      
      })
    })


    this.setState({
      clubeCasa:clubeCasa[0],
      clubeVisita:clubeVisita[0],
      escudoCasa:escudosCasa[2],
      escudoVisita:escudosVisita[2]
    })
  }

  render(){
    return (
      <Content>
        <Card>     
          <View style={{borderBottomWidth:1, borderBottomColor: '#ccc'}}>         
              <Button transparent>
                <Icon name="map-marker" type="FontAwesome"/>
                <Text style={{fontSize:12}}>{this.props.partida.local} - {this.props.partida.partida_data}</Text>
              </Button>
          </View>
          <CardItem>
            <Time time={this.state.clubeCasa} escudo={this.state.escudoCasa} desempenho={this.props.partida.aproveitamento_mandante}/> 
              <Icon name="remove" type="FontAwesome" />
            <Time time={this.state.clubeVisita} escudo={this.state.escudoVisita} desempenho={this.props.partida.aproveitamento_visitante.reverse()}/>         
          </CardItem>

        </Card>
      </Content>
    )
  }
}