import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, Badge, View } from 'native-base';
import Time from './time'

export default class CardTime extends Component {
  render() {
    return (
        <Content>
          <Card>     
            <View style={{borderBottomWidth:1, borderBottomColor: '#ccc'}}>         
                <Button transparent>
                  <Icon name="map-marker" type="FontAwesome"/>
                  <Text>Minerão - 06/06/18 18:25</Text>
                </Button>
            </View>
            <CardItem>
              <Time /> 
                <Icon name="remove" type="FontAwesome" />
              <Time />              
            </CardItem>

          </Card>
        </Content>
    )
  }
}