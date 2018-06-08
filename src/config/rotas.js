import React from 'react'
import { StackNavigator } from 'react-navigation'
import HomeScreen from '../screens/home'
import FavoritosScreen from '../screens/favoritos'

export const RootStack = StackNavigator({
        Home: {
            screen: HomeScreen,
            navigationOptions: ({ navigation}) => ({
               header:null
            })
        },
        Favoritos: {screen: FavoritosScreen}
},
{
    initialRouteName: 'Home'
})