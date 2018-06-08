import React from 'react'
import { StackNavigator } from 'react-navigation'
import HomeScreen from '../screens/home'
import FavoritosScreen from '../screens/favoritos'
import MaisEscalados from '../screens/maisEscalados'
import FavoritoDetalhe from '../screens/favoritoDetalhe'
import ParciaisJogadores from '../screens/parciaisJogadores'
import ProximaRodada from '../screens/proximaRodada'
import RodadaAtual from '../screens/rodadaAtual'

export const RootStack = StackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: ({ navigation}) => ({
            header:null
        })
    },
    Favoritos: {
        screen: FavoritosScreen,
    },
    FavoritoDetalhe:{
        screen: FavoritoDetalhe,
        navigationOptions: ({ navigation}) => ({
            header:null
        })
    },
    ParciaisJogadores:{
        screen: ParciaisJogadores,
        navigationOptions: ({ navigation}) => ({
            header:null
        })
    },
    ProximaRodada:{
        screen: ProximaRodada,
        navigationOptions: ({ navigation}) => ({
            header:null
        })
    },
    MaisEscalados:{
        screen: MaisEscalados,
        navigationOptions: ({ navigation}) => ({
            header:null
        })
    } 
},
{
    initialRouteName: 'Home'
})