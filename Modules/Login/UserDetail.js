import React, { Component } from 'react';
import { View, Text, TextInput,TouchableOpacity,Image,StyleSheet,TouchableWithoutFeedback } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import DatePicker from 'react-native-datepicker';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import DismissKeyboard from 'dismissKeyboard';

export default class UserDetail extends Component {

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
    this.props.navigation.navigate('DriverDetail');
}


  render() {
    return (
        <TouchableWithoutFeedback onPress={()=>{DismissKeyboard()}}>
        <View style={styles.container}>
            <TextInput
            placeholder = "Name" 
            placeholderTextColor = 'gray'
            style = {[styles.inputView]}
            maxLength = {20}>
            </TextInput>
            <View style = {{marginTop : 4,backgroundColor :'black',height:1,marginHorizontal:30}}></View>
                <View style = {{marginLeft : 30, marginRight: 21}}>
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
            top: 7,
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
            fontSize : 27
          },
          placeholderText: {
            color: 'gray',
            textAlign : 'left',
            fontSize : 27
          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(date) => {this.setState({date: date})}}
      />
      <View style = {{marginTop : 15,backgroundColor :'black',height:1}}></View>
      </View>
      <KeyboardSpacer />
      <View style = {{flex: 1,alignItems : 'flex-end',justifyContent:'flex-end'}}>
      <TouchableOpacity style = {{alignSelf:'flex-end',justifyContent:'flex-end',marginBottom:250,marginRight:30,height:60,width:60}}
          onPress={() => 
          this.FunctionToOpenSecondActivity()
           } >
     <Image 
        source = {require('../../Modules/Images/Next.png')} style={{height:60,width:60}}/>
         </TouchableOpacity>
         </View>
      
      </View>
     
      </TouchableWithoutFeedback>
      );
    }
  }
  
  
  const styles = StyleSheet.create({
      container: {
       flex: 1,
       paddingTop: 15,
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
          marginHorizontal: 30,
          fontSize: 27,
          color: 'black',
          borderWidth: 0,
          borderColor: 'gray',
          textAlign:'left',
          alignSelf: 'stretch',
        },
  });

  const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 27,
        paddingTop: 20,
        color: 'black',
    },
});