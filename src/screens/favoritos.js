import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View, Alert, AsyncStorage
  } from 'react-native'
import { Container, Header, Button , Content, Form, Item, Input, Title, List, ListItem, Thumbnail, Body, Toast, Right, Icon, Spinner } from 'native-base';

export default class Favoritos extends Component {

    static navigationOptions = {
       title:'Time Favorito'
    }

    constructor(props){
        super(props)
        this.state = {
            timeNome: '',
            times:[],
            load: false,
            iconButton:'ios-add-circle',
            removeButton:'ios-remove-circle',
            colorButton:'success',
            colorDelButton:'danger',

        }
    }

    onPut(){
        this.setState({load:true})
        let url = `https://api.cartolafc.globo.com/times?q=${this.state.timeNome}`
         fetch(url)
        .then(sucess => sucess.json())
        .then(response =>{
            let times = []
            response.forEach(time =>{
                times.push(time)
            })
            this.setState({times,
                load:false})
        })
        .catch(error => Alert.alert('Busca de times','Erro ao buscar times'))
    }

    async addLocalStorage(time){
        console.log(time)
        await AsyncStorage.setItem('@car:time', time).then(sucess => alert('Adicionado com sucesso.'))
    }

    removeLocalStorage(){

    }

    renderLoading(){
        if(this.state.load)
            return (
                <Spinner />
            )
    }

    render(){
        const {navigate} = this.props.navigation
        return(
            <Container>
                <Content>
                    <Form>
                        <Item>
                            <Input placeholder="Digite nome do time" value={this.state.timeNome} 
                            onChangeText={(timeNome)=>this.setState({timeNome})}
                            />
                        </Item>
                        <Button onPress={()=> this.onPut()}><Text>Adicionar</Text></Button>
                        {this.renderLoading()}
                        <List>
                            {
                                this.state.times.map((time, key) => 
                                    <ListItem key={key} onPress={() => navigate('FavoritoDetalhe',{slug: time.slug})}>
                                        <Thumbnail square size={80} source={{ uri: time.url_escudo_png }} />
                                        <Body>
                                            <Text style={{fontWeight: 'bold'}}>{time.nome}</Text>
                                            <Text note>Cartola: {time.nome_cartola}</Text>
                                        </Body>
                                        <Right>
                                            <Button rounded onPress={() => this.addLocalStorage(time)}>
                                                <Icon name={this.state.iconButton} type='Ionicons' />
                                            </Button>
                                        </Right>
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
