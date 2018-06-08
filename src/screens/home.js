import React, { Component } from 'react'
import { Container, Header, Content, Card, CardItem, Text, Icon, Right, Title, Body, Left } from 'native-base';

  export default class Home extends Component{

    constructor(props){
        super(props)
        this.state = {
            menuOpen:[
                {
                    'nome':'Minhas Ligas',
                    'icon':'ios-people',
                    'type':'Ionicons',
                    'color':'#b71c1c',
                    'link':'Ligas'
                },
                {
                    'nome':'Time Favorito',
                    'icon':'sports-club',
                    'type':'Entypo',
                    'color':'#0288d1',
                    'link':'Favoritos'
                },
                {
                    'nome':'Rodada Atual',
                    'icon':'results',
                    'type':'Foundation',
                    'color':'#558b2f',
                    'link':'ProximaRodada'
                },
                {
                    'nome' :'Mais escalados',
                    'icon':'people',
                    'type':'MaterialIcons',
                    'color':'#ef6c00',
                    'link' :'MaisEscalados'
                },
            ],
            menuClose:[
                {
                    'nome':'Parciais do Jogadores',
                    'icon':'logo-googleplus',
                    'type':'Foundation',
                    'color':'#558b2f',
                    'link':'ProximaRodada'
                },
            ],
            
            fechamento:'',
            statusMercado:false
        }
    }

    componentWillMount(){
        fetch('https://api.cartolafc.globo.com/mercado/status')
        .then( response => response.json())
        .then( response => {
            this.setState({
                fechamento:response.fechamento,
                statusMercado:response.game_over
            })
            console.log(response) 
        })
    }

    renderStatusMercado(){
        if(this.state.statusMercado){
            return (
                <CardItem style={{backgroundColor:'#b71c1c'}}>
                    <Left>	
                        <Body>
                        <Text>Mercado Fechado</Text>
                        <Text note>Acompanhe as Parciais </Text>
                        </Body>
                    </Left>
                    </CardItem>
            )
        }
        return (
            <CardItem>
                <Left>	
                    <Body>
                        <Text style={{color:'#2e7d32', fontWeight:'bold'}}>Mercado Aberto</Text>
                        <Text note style={{fontWeight:'bold'}}>Fecha em {this.state.fechamento.dia}/{this.state.fechamento.mes}/{this.state.fechamento.ano} 
                        às {this.state.fechamento.hora}:{this.state.fechamento.minuto}
                        </Text>
                    </Body>
                </Left>
            </CardItem>
        )
    }

    render(){
        const {navigate} = this.props.navigation
        return(
            <Container>
                <Header>
                    <Body>
                        <Title>Letox Cartola</Title>
                    </Body>
                </Header>
                <Content>
                <Card>
                    {
                        this.state.menuOpen.map((item,key) => 
                            <CardItem button key={key} bordered onPress={()=> navigate(item.link)}>
                                <Icon active name={item.icon} type={item.type} style={{color:item.color}}/>
                                <Text>{item.nome}</Text>
                                <Right>
                                    <Icon name="arrow-forward" />
                                </Right>
                            </CardItem>
                        )
                    }
                                    
                </Card>
                <Card>
                    {this.renderStatusMercado()}
                </Card>
                </Content>
            </Container>
        )
    }
  }
