import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, Badge } from 'native-base';

export default class CardTime extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Card>              
            <CardItem>
                <Button transparent>
                  <Icon active name="place" type="MaterialIcons"/>
                  <Text>Minerão - 06/06/18 18:25</Text>
                </Button>
            </CardItem>
            <CardItem>
              <Left>
                <Body>
                  <Text>1ª - Flamengo</Text>
                </Body>
                <Thumbnail square source={{uri: `https://s.glbimg.com/es/sde/f/equipes/2018/04/09/Flamengo-45.png`}} />
                <Body>
                    <Icon name="arrow-up-drop-circle" type="MaterialCommunityIcons" />
                </Body>
              </Left>
                <Icon name="remove" type="FontAwesome" />
              <Left>
                <Thumbnail square source={{uri: `https://s.glbimg.com/es/sde/f/equipes/2013/12/16/corinthians_45x45.png`}} />
                <Body>
                  <Text>2ª - Vasco</Text>
                </Body>
                <Body>
                    <Icon name="arrow-down-drop-circle-outline" type="MaterialCommunityIcons" />
                </Body>
              </Left>

            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}