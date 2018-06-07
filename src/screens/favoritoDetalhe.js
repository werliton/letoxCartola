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
        //let url = `https://api.cartolafc.globo.com/time/slug/${this.props.slug}`
        let url = `https://api.cartolafc.globo.com/time/slug/letox-fc`

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
        .catch(error => Alert.alert('Busca de pontuados','Erro ao buscar atletas:'+error))
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
        
        if(pontuados[atletaId] != undefined){
            let scouts = [] 
                Object.keys(pontuados[atletaId].scout).map(item =>{ 
                    scouts[item] = pontuados[atletaId].scout[item]          
                })
                console.log(scouts)
                //return
                scouts.forEach(scout=>{
                    console.log(scout)
                })
        }else{
            return <Text note> 0.0</Text>
        }
    }

    scout(scout){
        
        if(scout['CA'] != undefined) return <Text note style={{fontSize:10}}>Cartão amarelo: {scout['CA']}</Text>
        if(scout['FC']  != undefined) return <Text note style={{fontSize:10}}>Faltas cometidas: {scout['FC']}</Text>
        if(scout['PE']  != undefined) return <Text note style={{fontSize:10}}>Passe errado: {scout['PE']}</Text>
        if(scout['DD']  != undefined) return <Text note style={{fontSize:10}}>Defesa difícil: {scout['DD']}</Text>
        if(scout['GS']  != undefined) return <Text note style={{fontSize:10}}>Gols sofridos: {scout['GS']}</Text>
        if(scout['FS']  != undefined) return <Text note style={{fontSize:10}}>Faltas sofridas: {scout['FS']}</Text>
        if(scout['I']  != undefined) return <Text note style={{fontSize:10}}>Impedimento: {scout['I']}</Text>
        if(scout['RB']  != undefined) return <Text note style={{fontSize:10}}>Roubadas de bola: {scout['RB']}</Text>
        if(scout['A']  != undefined) return <Text note style={{fontSize:10}}>Assistência: {scout['A']}</Text>
        if(scout['FF']  != undefined) return <Text note style={{fontSize:10}}>Finalização fora: {scout['FF']}</Text>
        if(scout['FT']  != undefined) return <Text note style={{fontSize:10}}>Finalização na trave: {scout['FT']}</Text>
        if(scout['FD']  != undefined) return <Text note style={{fontSize:10}}>Finalização Defendida: {scout['FD']}</Text>
    }

    render(){
        return(
            <Container>
                <Header><Title>Time montado - {Math.ceil(this.state.pontos,-1)}</Title></Header>
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
