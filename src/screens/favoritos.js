import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View, Button, Alert
  } from 'react-native'
import { Container, Header, Content, Form, Item, Input, Title, List, ListItem, Thumbnail, Body } from 'native-base';

export default class Favoritos extends Component {
      constructor(props){
          super(props)
          this.state = {
              timeNome: '',
              times:[]
          }
      }

    onPut(){
        let url = `https://api.cartolafc.globo.com/times?q=${this.state.timeNome}`
         fetch(url)
        .then(sucess => sucess.json())
        .then(response =>{
            let times = []
            response.forEach(time =>{
                times.push(time)
            })
            this.setState({times})
            console.log(response);
            
        })
        .catch(error => Alert.alert('Busca de times','Erro ao buscar times'))
    }

    render(){
        return(
            <Container>
                <Header><Title>Time Favorito</Title></Header>
                <Content>
                    <Form>
                        <Item>
                            <Input placeholder="Digite nome do time" value={this.state.timeNome} 
                            onChangeText={(timeNome)=>this.setState({timeNome})}
                            />
                        </Item>
                        <Button title="Adicionar" onPress={()=> this.onPut()}/>
                        <List>
                            {
                                this.state.times.map((time, key) => 
                                    <ListItem key={key}>
                                        <Thumbnail square size={80} source={{ uri: time.url_escudo_png }} />
                                        <Body>
                                            <Text>{time.nome}</Text>
                                            <Text note>Cartola: {time.nome_cartola}</Text>
                                        </Body>
                                    </ListItem>
                                )        
                            }
                        </List>
                    </Form>
                </Content>
            </Container>
        )
    }
  }
