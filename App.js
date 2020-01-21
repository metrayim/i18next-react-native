import React, { Component } from 'react'
import { Text, View, TextInput } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Contact from './src/Components/Contact'
import Home from './src/Components/Home'
import i18next from 'i18next'
import en from './src/utils/lang/en'
import km from './src/utils/lang/km'
import AsyncStorage from '@react-native-community/async-storage'


const RootStack = createStackNavigator({
  Home: Home,
  Contact: Contact
})
const resources = { en, km };
const AppContainer = createAppContainer(RootStack)
export default class App extends Component {
  constructor(props) {
    super(props)
    this.lang().then((data) => {
      if (data == null || data == '') {
        data = 'en'
      }
      i18next.init({     
        resources,
        lng: data
      })
    })
    this.forceUpdate()

  }
  lang = async () => {
    return await AsyncStorage.getItem('leg')


  }
  render() {

    return (
      <AppContainer/>
    )
  }
}



