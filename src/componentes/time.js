import React, { Component } from 'react'
import { Thumbnail, Text, Icon, Body, Right, View } from 'native-base';

export default props => (
    <Right>
        <Body>
            <Thumbnail square source={{uri: props.logo }} />
            <Text>{ props.posicao }ª - { props.nomeTime }</Text>

            <View style={{flexDirection:'row'}}>                   
                <Icon name="soccer-ball-o" type='FontAwesome' style={{ fontSize: 13, color: "green", paddingLeft: 3}}/>                    
                <Icon name="soccer-ball-o" type='FontAwesome' style={{ fontSize: 13, color: "red",paddingLeft: 3}}/>                    
                <Icon name="soccer-ball-o" type='FontAwesome' style={{ fontSize: 13, color: "#000",paddingLeft: 3}}/>
                <Icon name="soccer-ball-o" type='FontAwesome' style={{ fontSize: 13, color: "red",paddingLeft: 3}}/>                    
                <Icon name="soccer-ball-o" type='FontAwesome' style={{ fontSize: 13, color: "#666",paddingLeft: 3}}/>
            </View>
        </Body>
    </Right> 
)