import React, { Component } from 'react'
import { Text, View,Button } from 'react-native'
import i18next from 'i18next';
import { withNavigationFocus } from 'react-navigation';

 class Contact extends Component {
    changeLang=()=>{
        if(i18next.language=='en'){
                   i18next.changeLanguage('km') 
                }
                else{
                   console.log('helloooo')
                   i18next.changeLanguage('en')
                }
               
    }
    render() {
        return (
            <View>
               
                <Text> Contact </Text>
                <Button title='chage lang' onPress={()=>this.changeLang()}/>
                <Text> {i18next.t('hello')} </Text>
            </View>
        )
    }
}
export default withNavigationFocus(Contact);