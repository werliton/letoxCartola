import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View, Button, Alert
  } from 'react-native'
import { Container, Header, Content, Form, Item, Input, Title, List, ListItem, Thumbnail, Body, Icon, Right } from 'native-base';

export default class FavoritoDetalhe extends Component {
      constructor(props){
          super(props)
          this.state = {
              atletas:[],
              clubes:[],
              pontuados:[],
              scouts:[],
              capitao:'',
              pontos:'',
              escudo:''
          }
      }

    async componentWillMount(){
        const {slug} = this.props.navigation.state.params

        let url = `https://api.cartolafc.globo.com/time/slug/${slug}`

        await fetch(url)
        .then(sucess => sucess.json())
        .then(response => {
            let atletas = []
            response.atletas.forEach(atleta =>{
                atletas.push(atleta)
            })
            // Ordenando lista de atletas
            atletas =  atletas.sort((a, b )=> a.posicao_id - b.posicao_id)
            this.setState({
                atletas,
                capitao:response.capitao_id,
                pontos:response.pontos
            })
            return response

        })
        .then(response => {
            let clubes = []
            Object.keys(response.clubes).map(element =>{
                clubes.push(response.clubes[element])
            })         

            this.setState({clubes})
        })
        .catch(error => Alert.alert('Busca de atletas','Erro ao buscar atletas:'+error))
        
        this.pontuados()
    }

    async pontuados(){
        let url = 'https://api.cartolafc.globo.com/atletas/pontuados'

        await fetch(url)
        .then(sucess => sucess.json())
        .then(response => { 
            let pontuados = []
            Object.keys(response.atletas).map(item => {
                pontuados[item] = response.atletas[item]
            })
            this.setState({pontuados})                     
        })
        .catch(error => {
            console.log(error)
            Alert.alert('Busca de pontuados','Mercado fechado. Esse time é o anterior.')
        })
    }

    isCapita(atletaId){        
        if(atletaId === this.state.capitao)
            return <Text style={{color:'#f4a041', fontWeight:'bold'}}>Capita</Text>
    }

    renderEscudo(clubeId){
        let clubes = this.state.clubes.filter(clube => clube.id === clubeId) 
        let escudos = []
        clubes.forEach(clubes =>{
            Object.keys(clubes.escudos).map(item =>{
                escudos.push(clubes.escudos[item])
            })
        })
        return <Thumbnail square size={20} source={{ uri: escudos[0] }} style={{marginRight:5}}/>
    }

    renderPontuacao(atletaId){
        let pontuados = this.state.pontuados
        
        if(pontuados[atletaId] != undefined)
            return <Text note style={{fontWeight:'bold'}}> {pontuados[atletaId].pontuacao}</Text>
        else
            return <Text note> 0.0</Text>
    }

    renderScouts(atletaId){
        let pontuados = this.state.pontuados
        let pontuacao = 0
        
        if(pontuados[atletaId] != undefined){
            return (
                <View>
                    {
                        Object.keys(pontuados[atletaId].scout).map((item, key) => 
                            <Text note style={{fontSize:10}} key={key}>{this.scoutName(item)}: {pontuados[atletaId].scout[item]}</Text>       
                        )
                    }
                </View>
            )
        }
        return <Text note></Text>
    }

    scoutName(scout){        
        if(scout === 'A')  return 'Assistência'
        if(scout === 'CA') return 'Cartão amarelo'
        if(scout === 'DD') return 'Defesa difícil'
        if(scout === 'FC') return 'Faltas cometidas'
        if(scout === 'FD') return 'Finalização Defendida'
        if(scout === 'FF') return 'Finalização fora'
        if(scout === 'FS') return 'Faltas sofridas'
        if(scout === 'FT') return 'Finalização na trave'
        if(scout === 'G')  return 'Gols'
        if(scout === 'GS') return 'Gols sofridos'
        if(scout === 'I')  return 'Impedimento'
        if(scout === 'PE') return 'Passe errado'
        if(scout === 'RB') return 'Roubadas de bola'
    }

    render(){
        return(
            <Container>
                <Header>
                    <Body>
                        <Title>Time montado - {Number.parseFloat(this.state.pontos).toFixed(2)}</Title>
                    </Body>
                </Header>
                <Content>
                    <List>
                        {
                            this.state.atletas.map((atleta, key) => 
                                <ListItem key={key}>
                                    {this.renderEscudo(atleta.clube_id)}
                                    <Body>
                                        <Text style={{fontWeight:'bold'}}>{atleta.apelido} {this.isCapita(atleta.atleta_id)} </Text>
                                    </Body>
                                    {this.renderScouts(atleta.atleta_id)}        
                                    {this.renderPontuacao(atleta.atleta_id)}                            
                                    <Right>
                                        <Icon name="arrow-forward" />
                                    </Right>
                                </ListItem>
                            )        
                        }
                    </List>
                </Content>
            </Container>
        )
    }
  }
