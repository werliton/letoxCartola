import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';


export default props => (
        <View style={{flex:2, flexDirection: 'row'}}>
            <View style={{flex:2}}>
                <Image style={{width: 45, height: 45}} source={{uri: `https://s.glbimg.com/es/sde/f/equipes/2018/04/09/Flamengo-45.png`}} />
                <Text>Posição - Nome do time</Text>
                <Text>D - V - D - V</Text>
            </View>
            <View style={{flex:2}}>
                <Text>X</Text>
            </View>
            <View style={{flex:2}}>
                <Image style={{width: 45, height: 45}} source={{uri: `https://s.glbimg.com/es/sde/f/equipes/2018/04/09/Flamengo-45.png`}} />
                <Text>Posição - Nome do time</Text>
                <Text>D - V - D - V</Text>
            </View>
            
            <Text>Lolca do jogo - data e hora</Text>
        </View>
)