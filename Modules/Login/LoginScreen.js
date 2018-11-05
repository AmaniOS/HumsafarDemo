import React, { Component } from 'react';
import { View, Text,StyleSheet,TextInput,TouchableOpacity,Image,Alert,TouchableWithoutFeedback } from 'react-native';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import DismissKeyboard from 'dismissKeyboard';

export default class LoginScreen extends Component {
  static navigationOptions =
  {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
        number : '',
        numberValidation : true,
    };
  }

  FunctionToOpenSecondActivity = () =>
  {
  if (this.state.number.length == 0)
  {
    alert("Please fill the phone number");
  }
  else if (this.state.number.length < 10)
    {
      alert("Invalid phone number");
    }
    else
    {
      this.props.navigation.navigate('UserDetail');
    }
  }

  render() {
    let {number} = this.state;
    return (
      <TouchableWithoutFeedback onPress={()=>{DismissKeyboard()}}>
      <View style={styles.container}>
       <Text style={styles.item}>Enter Your Mobile number</Text>
       <View style = {{flex:1,flexDirection:'row',marginHorizontal: 30}}>
       <Text style={{marginTop:20,fontSize:23,  marginLeft: 10,}}>+91 </Text>
       <View style = {{flex:1,flexDirection:'column'}}>
        <TextInput
          placeholder = "Enter your mobile number" 
          placeholderTextColor = 'white'
          keyboardType= "numeric"
         // enablesReturnKeyAutomatically = {true}
          keyboardShouldPersistTaps={false}
          maxLength={10}
          style = {styles.inputView}
          returnKeyType= "go"
          value={number}
           refs = "textInput"
           onChangeText = {(number) => this.setState({number})}
          >
          
          </TextInput>
          <View style = {{marginTop :4,backgroundColor :'black',height:1}}></View>
          </View>
       </View>
       <TouchableOpacity style = {{alignSelf:'flex-end',justifyContent:'flex-end',marginBottom:250,marginRight:30,height:60,width:60}}
          onPress={() => 
          this.FunctionToOpenSecondActivity()
           } >
     <Image 
        source = {require('../../Modules/Images/Next.png')} style={{height:60,width:60}}/>
         </TouchableOpacity>
         {/* <KeyboardSpacer /> */}
      </View>
     
      </TouchableWithoutFeedback>
    );
  }
}


const styles = StyleSheet.create({
    container: {
     flex: 1,
     paddingTop: 100,
     backgroundColor: 'white',
    },
    tableView:{
        flexDirection: 'row', 
        padding: 10
      },
    item: {
      paddingLeft: 30,
      fontSize: 23,
      // height: 30,
    },
    item1: {
        paddingTop: 20,
        paddingLeft: 30,
        fontSize: 23,
        // height: 30,
      },
      inputView: {
        paddingTop: 20,
        fontSize: 23,
        color: 'black',
        borderWidth: 0,
        borderColor: 'gray',
        textAlign:'left',
        alignSelf: 'stretch',
      },
});