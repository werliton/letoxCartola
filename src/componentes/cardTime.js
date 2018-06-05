import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, Badge, View } from 'native-base';
import Time from './time'

export default class CardTime extends Component{

  constructor(props){
    super(props)
    this.state = {
      clubeCasa:'', clubeVisita:'', escudo:''
    }
  }

  async componentWillMount(){
    
    let clubeCasa   = this.props.times.filter(time => time.id === this.props.partida.clube_casa_id)
    let clubeVisita = this.props.times.filter(time => time.id === this.props.partida.clube_visitante_id)
    let escudos = []

    await clubeCasa.forEach(element => {
      Object.keys(element.escudos).map(ele =>{
        escudos.push(element.escudos[ele])      
      })
    })
console.log(clubeCasa);

    this.setState({
      clubeCasa:clubeCasa[0],
      clubeVisita:clubeVisita[0],
      escudo:escudos[1]
    })
  }

  render(){
    return (
      <Content>
        <Card>     
          <View style={{borderBottomWidth:1, borderBottomColor: '#ccc'}}>         
              <Button transparent>
                <Icon name="map-marker" type="FontAwesome"/>
                <Text>{this.props.partida.local} - {this.props.partida.partida_data}</Text>
              </Button>
          </View>
          <CardItem>
            <Time time={this.state.clubeCasa} escudo={this.state.escudo}/> 
              <Icon name="remove" type="FontAwesome" />
            <Time time={this.state.clubeVisita} escudo={this.state.escudo}/>        
          </CardItem>

        </Card>
      </Content>
    )
  }
}