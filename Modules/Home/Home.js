import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput,Button,Alert,Image,KeyboardAvoidingView,StatusBar,} from 'react-native';


export default class Home extends Component{
  static navigationOptions = ({navigation}) =>{
  return {
    title: navigation.getParam('screenName', 'A Default Value'),
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
};
 
    render() {
      let pic = {
        uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
      }; 
      const { navigation } = this.props;
      const itemId = navigation.getParam('itemId', 'NO-ID');
      const otherParam = navigation.getParam('otherParam', 'some default value');
      return (
        <View style={styles.container}>
        <View style = {styles.logoContainer}>
        <Image source={pic} style={styles.logo}/>
        <Text style={{textAlign:'center'}}> 
        <Text style={{fontWeight: 'bold',color: 'red'}}>Basic Info:{'\n'}</Text> {JSON.stringify(otherParam)}{'\n'} My ID is:{JSON.stringify(itemId)}</Text>
        </View>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: { 
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        
    },
    logoContainer:{
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems : 'center'
    },
    logo:{
      width: 300,
      height: 200,
    },
  });