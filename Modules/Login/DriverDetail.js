import React, { Component } from 'react';
import { View, Text, TextInput,TouchableOpacity,Image,StyleSheet,ScrollView,TouchableWithoutFeedback } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import DatePicker from 'react-native-datepicker';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import DismissKeyboard from 'dismissKeyboard';

export default class DriverDetail extends Component {

    static navigationOptions =
    {
      title: 'Enter your details',
      headerStyle: {
        backgroundColor: 'black',
      },
      headerTintColor: 'white',
      headerTitleStyle: {
        fontWeight: 'normal',
        fontSize : 27
      },
    }; 

  constructor(props) {
    super(props);
    this.inputRefs = {};
    this.state = {
      date:"",
      gender: undefined,
      items: [
          {
              label: 'Male',
              value: 'Male',
          },
          {
              label: 'Female',
              value: 'Female',
          },
          {
              label: 'Other',
              value: 'Other',
          },
      ],
    };
  }

  componentDidMount() {
    setTimeout(() => {
        this.setState({
            gender: null,
        });
    }, 1000);
    setTimeout(() => {
        this.setState({
           // items: this.state.items.concat([{ value: 'purple', label: 'Purple' }]),
        });
    }, 2000);
}

  
FunctionToOpenSecondActivity = () =>
{
    this.props.navigation.navigate('OTP');
}


render() {
  return (
    <TouchableWithoutFeedback onPress={()=>{DismissKeyboard()}}>
    <ScrollView style = {{backgroundColor:'white',flex:1}}>
      <View style={styles.container}>
          <TextInput
          placeholder = "Name" 
          placeholderTextColor = 'gray'
          style = {[styles.inputView]}
          maxLength = {20}>
          </TextInput>
          <View style = {{marginTop : 6,backgroundColor :'black',height:1,marginHorizontal:30}}></View>
              <View style = {{marginLeft : 30, marginRight: 21,marginTop:10}}>
               <RNPickerSelect
                  placeholder={{
                      label: 'Gender',
                      value: null,
                  }}
                  placeholderTextColor="blue"
                 
                  items={this.state.items}
                  onValueChange={(value) => {
                      this.setState({
                          gender: value,
                      });
                  }}
                  style={{ ...pickerSelectStyles }}
                  value={this.state.gender}
                  ref={(el) => {
                      this.inputRefs.picker = el;
                  }}
              />
              </View>
               <View style = {{marginHorizontal:30,marginTop : 4,backgroundColor :'black',height:1}}></View>
            <View style = {{marginHorizontal:30}}>
            <DatePicker
      style={{width: '100%',top:10}}
      date={this.state.date}
      mode="date"
      placeholder="DOB"
      format="YYYY-MM-DD"
      minDate="1880-05-01"
      maxDate="2000-06-01"
      confirmBtnText="Confirm"
      cancelBtnText="Cancel"
      iconSource = {require('../../Modules/Images/Calender.png')}
      customStyles={{
        dateIcon: {
         // position: 'absolute',
          right: -5,
          top: 5,
          marginBottom : 0,
          height : 18,
          width : 21
          
        },
        dateInput: {
          top: 5,
          borderWidth: 0,
          marginLeft: 0,
          marginBottom: 0,
          alignItems: "flex-start",
        },
        dateText:{
          color: 'black',
          justifyContent: 'flex-start',
          textAlign:'left',
          fontSize : 18
        },
        placeholderText: {
          color: 'gray',
          textAlign : 'left',
          fontSize : 18
        }
        // ... You can check the source to find the other keys.
      }}
      onDateChange={(date) => {this.setState({date: date})}}
    />
    <View style = {{marginTop : 12,backgroundColor :'black',height:1}}></View>
    </View>
    <View style = {{flexDirection:'row',marginHorizontal:30,justifyContent:'flex-start'}}>
    <TextInput
          placeholder = "Car pic" 
          placeholderTextColor = 'gray'
          style = {[styles.inputView2]}>
          </TextInput>
          <TouchableOpacity style = {{height:26,width:26,top:25}}
        onPress={() => 
        this.FunctionToOpenSecondActivity()
         } >
   <Image 
      source = {require('../../Modules/Images/Camera.png')} style={{height:26,width:26}}/>
       </TouchableOpacity>
          </View>
          <View style = {{marginTop : 6,backgroundColor :'black',height:1,marginHorizontal:30}}></View>
          <View style = {{flexDirection:'row',marginHorizontal:30,justifyContent:'flex-start'}}>
    <TextInput
          placeholder = "RC pic" 
          placeholderTextColor = 'gray'
          style = {[styles.inputView2]}>
          </TextInput>
          <TouchableOpacity style = {{height:26,width:26,top:25}}
        onPress={() => 
        this.FunctionToOpenSecondActivity()
         } >
   <Image 
      source = {require('../../Modules/Images/Camera.png')} style={{height:26,width:26}}/>
       </TouchableOpacity>
          </View>
          <View style = {{marginTop : 6,backgroundColor :'black',height:1,marginHorizontal:30}}></View>
          <View style = {{flexDirection:'row',marginHorizontal:30,justifyContent:'flex-start'}}>
    <TextInput
          placeholder = "DL front pic" 
          placeholderTextColor = 'gray'
          style = {[styles.inputView2]}>
          </TextInput>
          <TouchableOpacity style = {{height:26,width:26,top:25}}
        onPress={() => 
        this.FunctionToOpenSecondActivity()
         } >
   <Image 
      source = {require('../../Modules/Images/Camera.png')} style={{height:26,width:26}}/>
       </TouchableOpacity>
          </View>
          <View style = {{marginTop : 6,backgroundColor :'black',height:1,marginHorizontal:30}}></View>
          <View style = {{flexDirection:'row',marginHorizontal:30,justifyContent:'flex-start'}}>
    <TextInput
          placeholder = "DL back pic" 
          placeholderTextColor = 'gray'
          style = {[styles.inputView2]}>
          </TextInput>
          <TouchableOpacity style = {{height:26,width:26,top:25}}
        onPress={() => 
        this.FunctionToOpenSecondActivity()
         } >
   <Image 
      source = {require('../../Modules/Images/Camera.png')} style={{height:26,width:26}}/>
       </TouchableOpacity>
          </View>
          <View style = {{marginTop : 6,backgroundColor :'black',height:1,marginHorizontal:30}}></View>

     <KeyboardSpacer />
    <View style = {{flex: 1,alignItems : 'flex-end',justifyContent:'flex-end'}}>
    <TouchableOpacity style = {{alignSelf:'flex-end',justifyContent:'flex-end',marginTop:100,marginBottom:110,marginRight:30,height:60,width:60}}
        onPress={() => 
        this.FunctionToOpenSecondActivity()
         } >
   <Image 
      source = {require('../../Modules/Images/Next.png')} style={{height:60,width:60}}/>
       </TouchableOpacity>
       </View>
      </View>
      </ScrollView>
      </TouchableWithoutFeedback>
    );
  }
}


const styles = StyleSheet.create({
    container: {
     flex: 1,
     paddingTop: 12,
     backgroundColor: 'white',
    },
    tableView:{
        flexDirection: 'row', 
        padding: 10
      },
    item: {
      paddingLeft: 30,
      fontSize: 18,
      // height: 30,
    },
    item1: {
        paddingTop: 20,
        paddingLeft: 30,
        fontSize: 18,
        // height: 30,
      },
      inputView: {
        paddingTop: 28,
        marginHorizontal: 30,
        fontSize: 18,
        color: 'black',
        borderWidth: 0,
        borderColor: 'gray',
        textAlign:'left',
        alignSelf: 'stretch',
      },
      inputView2: {
        paddingTop: 28,
       left:0,
       width:'92%',
        fontSize: 18,
        color: 'black',
        borderWidth: 0,
        borderColor: 'gray',
        textAlign:'left',
        alignSelf: 'flex-start',
      },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
      fontSize: 18,
      paddingTop: 20,
      color: 'black',
  },
});