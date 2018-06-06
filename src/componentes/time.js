import React, { Component } from 'react'
import { Thumbnail, Text, Icon, Body, Right, View } from 'native-base';

export default props => (
    <Right>
        <Body>
            <Thumbnail square small source={{uri: props.escudo }} />
            <Text style={{fontSize:12, fontWeight:'bold'}}>{ props.time.posicao }ª - { props.time.nome }</Text>

            <View style={{flexDirection:'row'}}>    
            {
                props.desempenho.map(item => {
                    
                    if(item === 'd')
                        return <Icon name="controller-record" type='Entypo' style={{ fontSize: 13, color: "red", paddingLeft: 3}}/>
                    if(item === 'v')
                        return <Icon name="controller-record" type='Entypo' style={{ fontSize: 13, color: "green", paddingLeft: 3}}/>                    
                    if(item === 'e')
                        return <Icon name="controller-record" type='Entypo' style={{ fontSize: 13, color: "#b3b3b5", paddingLeft: 3}}/>                    
                })
            }           
            </View>
        </Body>
    </Right> 
)