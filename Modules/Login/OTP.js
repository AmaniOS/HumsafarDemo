import React, { Component } from 'react';
import { View, Text,StyleSheet,TextInput,TouchableOpacity,Image,Alert,TouchableWithoutFeedback } from 'react-native';
import { CircularProgress, AnimatedCircularProgress } from 'react-native-circular-progress';
import DismissKeyboard from 'dismissKeyboard';

const MAX_POINTS = 60;

export default class OTP extends Component {
    static navigationOptions =
    {
      header: null,
    };

  constructor(props) {
    super(props);
    this.state = {
      isMoving: false,
      points: 0
    };
  }

  componentWillMount() {
    // let timerId = setInterval(() => this. timerProgress(), 1000);
    // setTimeout(() => { clearInterval(timerId); this.setState({ isMoving: false, points: 0}); }, 10000);
  }
  timerMethod(){
    this.timer = setTimeout(() => {
      this. timerProgress()
    },1000)
  }

  timerProgress() {
    let points = this.state.points + 1;
    this.setState({
      isMoving: true,
      points: points
    }); 
  }
    
    restartTimer() {
      this.setState({points:0})
      clearTimeout(this.timer);
    }


    FunctionToOpenSecondActivity = () =>
    {
   
        this.props.navigation.navigate('SelectDriverDetail');
    }

  render() {
   
    if (this.state.points < 60){
       this.timerMethod()
    }
    const fill = this.state.points / MAX_POINTS * 100;
    return (
      
      <TouchableWithoutFeedback onPress={()=>{DismissKeyboard()}}>
      <View style={styles.container}>
      <Image 
        source = {require('../../Modules/Images/Mobile.png')} style={{alignSelf:'flex-start',height:75,width:75,left:12}}/>
<View style ={{marginTop:40,flexDirection:'column',flex:1}}>
       <Text style={styles.item}>Enter 4-digit code sent to you</Text>
       <View style = {{flexDirection:'row'}}>
       <Text style={styles.item}>at </Text>
       <Text style={{fontSize:23,fontWeight:'bold'}}>1234567890</Text>
       </View>
        <View style = {{flexDirection:'row',top:30,justifyContent:'space-evenly',width:220,alignSelf:'center'}}>
        <TextInput
        keyboardType= "numeric"
         maxLength={1}
         style= {{fontSize:34,fontWeight:'400',width:32,height:38,borderWidth:1,borderColor:'black',textAlign:'center',}}></TextInput>
       <TextInput
        keyboardType= "numeric"
         maxLength={1}
         style= {{fontSize:34,fontWeight:'400',width:32,height:38,borderWidth:1,borderColor:'black',textAlign:'center',}}></TextInput>
         <TextInput
        keyboardType= "numeric"
         maxLength={1}
         style= {{fontSize:34,fontWeight:'400',width:32,height:38,borderWidth:1,borderColor:'black',textAlign:'center',}}></TextInput>
         <TextInput
        keyboardType= "numeric"
         maxLength={1}
         style= {{fontSize:34,fontWeight:'400',width:32,height:38,borderWidth:1,borderColor:'black',textAlign:'center',}}></TextInput>
        </View>
        <View style = {{alignItems:'center',marginTop:70}}>
        <AnimatedCircularProgress
          size={93}
          width={4.5}
          fill={fill}
          tintColor="black"
          backgroundColor="gray"
        >
          {(fill) => (
            <Text style={{fontSize: 18,alignSelf:'center'}}>
              { this.state.points }s
            </Text>
          )}
        </AnimatedCircularProgress>
</View>

        <Text style={{ alignSelf:'center',fontSize: 18,marginTop:15}}>OR</Text>
       <TouchableOpacity 
          onPress={() => 
           this.restartTimer()
           } >
     <Text style={{ alignSelf:'center',fontSize: 18,marginTop:10}}>Didn't receive OTP? RESEND</Text>
         </TouchableOpacity>
       </View>
       <TouchableOpacity style = {{alignSelf:'flex-end',justifyContent:'flex-end',marginBottom:120,marginRight:30,height:60,width:60}}
          onPress={() => 
          this.FunctionToOpenSecondActivity()
           } >
     <Image 
        source = {require('../../Modules/Images/Next.png')} style={{height:60,width:60}}/>
         </TouchableOpacity>
      </View>
       </TouchableWithoutFeedback>
    );
  }
}


const styles = StyleSheet.create({
    container: {
     flex: 1,
     paddingTop: 65,
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