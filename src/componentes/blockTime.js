import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'

export default props => (
        <View style={{flex:2, flexDirection:'rows'}}>
            <View style={{flex:2}}>
                <Image source={} />
                <Text>Nome do time</Text>
            </View>
            <View style={{flex:2}}>
                <Text>X</Text>
            </View>
            <View style={{flex:2}}>
                <Image source={} />
                <Text>Nome do time</Text>
            </View>
            
            <Text>Lolca do jogo - data e hora</Text>
        </View>
)