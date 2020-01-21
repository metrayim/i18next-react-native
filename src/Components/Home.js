import React, { Component } from 'react'
import { View ,TextInput,ScrollView } from 'react-native'
// import { Text } from 'react-native-elements';
import {  Text,Button, Layout } from '@ui-kitten/components';
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
            <ScrollView>
                {/* <Button title='go to contact' onPress={() => this.props.navigation.navigate('Contact')} /> */}
                {/* <Button title='chage lang' onPress={() => this.changeLang()} /> */}
                {/* <Text numberOfLines={2} ellipsizeMode={true}> Home </Text> */}
                <Text category={'h1'} style={{lineHeight:56}}>{i18next.t('itescholarship')}</Text>
                <Text category={'h2'} style={{lineHeight:52}}>{i18next.t('itescholarship')}</Text>
                <Text category={'h3'} style={{lineHeight:48}}>{i18next.t('itescholarship')}</Text>
                <Text category={'h4'} style={{lineHeight:43}}>{i18next.t('itescholarship')}</Text>
                <Text category={'h5'} style={{lineHeight:35}}>{i18next.t('itescholarship')}</Text>
                <Text category={'h6'} style={{lineHeight:30}}>{i18next.t('uploadImg')}</Text>
                <TextInput style={{ width: 100, height: 50 }} placeholder={i18next.t('hello')} keyboardType={'numeric'}></TextInput>
                <Layout>
                <Button style={{height:10,height:50}} textStyle={{lineHeight:0}} onPress={()=>this.changeLang()}>{i18next.t('next')}</Button>
                </Layout>
            </ScrollView>
        )
    }
}
