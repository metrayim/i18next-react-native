import React, { Component } from 'react'
import { View, Button, TextInput } from 'react-native'
import { Text } from 'react-native-elements';
import i18next from 'i18next';
import AsyncStorage from '@react-native-community/async-storage';
export default class Home extends Component {
    componentDidMount() {
        this.props.navigation.addListener('willFocus', () => (
            this.forceUpdate()
        ))
    }
 
    changeLang = async () => {
        if (i18next.language == 'en') {
            i18next.changeLanguage('km')

        }
        else {
            i18next.changeLanguage('en')
        }
        AsyncStorage.setItem('leg', i18next.language).then(() => {
            this.forceUpdate();
        })


    }
    render() {
        return (
            <View>
                <Button title='go to contact' onPress={() => this.props.navigation.navigate('Contact')} />
                <Button title='chage lang' onPress={() => this.changeLang()} />
                {/* <Text numberOfLines={2} ellipsizeMode={true}> Home </Text> */}
                <Text> {i18next.t('hello')} </Text>
                <Text>{i18next.t('time')}</Text>
                <Text>{i18next.t('home')}</Text>
                <Text>{i18next.t('next')}</Text>
                <Text>{i18next.t('skip')}</Text>
                <Text>{i18next.t('youshowread')}</Text>
                
                <TextInput style={{ width: 100, height: 50 }} placeholder={i18next.t('hello')} keyboardType={'numeric'}></TextInput>
            </View>
        )
    }
}
