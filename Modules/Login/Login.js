
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, MyAppText , TextInput,Button,Alert,Image,KeyboardAvoidingView,StatusBar, ScrollView,TouchableOpacity} from 'react-native';


export default class Login extends Component{
  static navigationOptions =
  {
    title: 'Login',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
 
  FunctionToOpenSecondActivity = () =>
  {
     this.props.navigation.navigate('UserDetail');
     
  }

  ChangeTextFunction = () =>
  {
    this.setState({
 
      TextHolder: this.state.TextHolder === 'Good Morning' ? 'Good Night' : 'Good Morning'
     
    })
  }

  constructor(){
    super()
    this.state = {
      name : '',
      nameValidation : true,
      password : '',
      passwordValidation : true,
      TextHolder :'Good Morning'
    }
  }

  Validate(text,type){
if(type == 'Username')
{
  alph = /^[a-zA-Z]+$/
  if(alph.test(text))
  {
this.setState({nameValidation:true,})
  }
  else
  {
this.setState({nameValidation:false,})
  }
}
else if (type == 'Password')
{
  num = /^[0-9]+$/
  if(num.test(text))
  {
this.setState({passwordValidation:true,})
  }
  else
  {
this.setState({passwordValidation:false,})
  }
}
  }

    render() {
//const { navigate } = this.props.navigation;
      let pic = {
        uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
      }; 
      return (
       
        <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <ScrollView>
        <View style={styles.container}>
        <View style = {styles.logoContainer}>
        <Image 
        source = {require('../../Modules/Images/logo.png')} style={styles.logo}/>
        <Image source={pic} style={styles.logo}/>
        <View style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 250, alignItems: 'center', justifyContent: 'center' }}>
        <Text style = {{alignItems: 'center', textAlign : 'center'}}>{this.state.TextHolder} </Text> 
        </View>
        </View>
        <Button title="Change Text" onPress={this.ChangeTextFunction}/>
          <TextInput
          placeholder = "Username" 
          placeholderTextColor = 'gray'
          style = {[styles.inputView, !this.state.nameValidation? styles.error:null]}
          returnKeyType="next"
          onSubmitEditing={()=> this.passwordInput.focus()}
          onChangeText= {(text)=>this.Validate(text,'Username')}>
          </TextInput>
          <TextInput placeholder = "Password" 
          secureTextEntry
          placeholderTextColor = 'gray'
          style = {[styles.inputView, !this.state.passwordValidation? styles.error:null]}
          returnKeyType = "go"
          ref = {(input) => this.passwordInput = input}
          onChangeText= {(text)=>this.Validate(text,'Password')}></TextInput>
          <TouchableOpacity style = {{justifyContent:'center',backgroundColor:'blue',marginTop:20,marginBottom: 50,height:40}}
          onPress={() =>  this.FunctionToOpenSecondActivity()}
        //  onPress={() => navigate('Home', {
        //   itemId: 1,
        //   otherParam: 'My name is Aman',
        //   screenName: 'Home',
        // }
     // )
       // }
        >
         <Text style = {{alignItems:'center',textAlign:'center',color: 'white',fontSize:20}}>LOGIN</Text>
         </TouchableOpacity>
        
        </View>
        </ScrollView>
        </KeyboardAvoidingView>
      );
    }
  }

  const styles = StyleSheet.create({
    container: { 
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'space-evenly',
        
    },
    logoContainer:{
      marginTop: 50,
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems : 'center',
     
    },
    logo:{
      width: 300,
      height: 250,
    },
    inputView: {
      paddingTop:10,
      paddingBottom:10,
      fontSize: 20,
      margin: 15,
      marginBottom : 1,
      color: 'black',
      borderWidth: 1,
      borderColor: 'gray',
      textAlign:'center',
      alignSelf: 'stretch',
    },
    error:{
      borderWidth: 1,
      borderColor: 'red',
    }
    
  });