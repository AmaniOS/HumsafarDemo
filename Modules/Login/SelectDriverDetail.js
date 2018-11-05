import React, { Component } from 'react';
import { View, Text, Image, StyleSheet,TouchableOpacity,FlatList } from 'react-native';

export default class SelectDriverDetail extends Component {
    static navigationOptions =
    {
      header: null,
    };
    
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  popToPreviousView()
  {
    this.props.navigation.navigate('OTP');
  }

  FunctionToOpenSecondActivity = () =>
  {
      this.props.navigation.navigate('ShareRideList');
  }

  render() {
    var MyArray = [{name:'Rajesh',value:'1',drivingSkills:'Good',carModel:'Swift',rating:'4.5/5',price:'Rs 430'},]
    return (
      <View style = {styles.container}>
      <View style = {{alignSelf:'flex-start',flexDirection:'row',height:47,width :'100%'}}>
      <TouchableOpacity style = {{alignSelf:'flex-start',justifyContent:'flex-start',marginLeft:10}}
          onPress={() => 
          this.popToPreviousView()
           } >
          <Image
        source = {require('../../Modules/Images/Back.png')} style={{height:30,width:40}}/>
         </TouchableOpacity>
         <View style = {{marginLeft:15,alignSelf:'flex-start',flexDirection:'column',height:40,width :'100%'}}>
         <Text style = {{alignSelf:'flex-start',fontSize:17,marginTop:5}}>Chandigarh to Delhi </Text>
         <Text style = {{alignSelf:'flex-start',fontSize:10,marginTop:2}}>Tomorrow - 02:00</Text>
           </View>
        </View>
        <View style = {{alignSelf:'flex-start',flexDirection:'row',height:1,width :'100%',backgroundColor:'gray'}}/>
        <View style = {{marginTop:10,alignSelf:'flex-start',flexDirection:'row',height:1,width :'100%',backgroundColor:'gray'}}/>
     
        <FlatList
          data={MyArray}
          renderItem={({item}) => <View style = {styles.tableView}>
            <View style = {styles.logoContainer}>
          <Image 
          source = {require('../../Modules/Images/logo.png')} style={styles.logo}/>
          </View>
          <View>
          <Text style={styles.item2}> {item.name} </Text>
           <View style = {{alignSelf:'flex-start',flexDirection:'row',marginTop:5}}>
          <Text style={[styles.item,{fontWeight: '600'}]}>Driving skills: </Text>
          <Text style={[styles.item,{alignSelf:'flex-start' ,paddingLeft: 1,}]}>{item.drivingSkills} </Text>
          </View>
          <View style = {{alignSelf:'flex-start',flexDirection:'row'}}>
          <Text style={[styles.item,{fontWeight: '600'}]}>Car model: </Text>
          <Text style={[styles.item,{alignSelf:'flex-start' ,paddingLeft: 1,}]}>{item.carModel} </Text>
          </View>
          <View style = {{alignSelf:'flex-start',flexDirection:'row'}}>
          <Image  source = {require('../../Modules/Images/Star.png')} style={{height:20,width:20, marginLeft: 20,marginTop:2}}/>
          <Text style={[styles.item,{alignSelf:'flex-start' ,paddingLeft: 1,marginTop:5}]}> {item.rating} </Text>
          </View>
          <View style = {{marginTop:8,alignSelf:'flex-start',flexDirection:'row',height:1,width :'120%',backgroundColor:'lightgray',marginLeft:-70}}/>
          <View style = {{flexDirection:'row',width:'100%'}}>
          <Text style={[styles.item,{fontSize:12,width:'72%',marginTop:4}]}>Price per seat </Text>
          <Text style={[styles.item,{alignSelf:'flex-end' ,marginRight: 1,fontSize:13,fontWeight: '600'}]}>{item.price} </Text>
          </View>
          <View style = {{marginTop:8,alignSelf:'flex-start',flexDirection:'row',height:1,width :'120%',backgroundColor:'lightgray',marginLeft:-70}}/>
          </View>
          </View>
        }
         keyExtractor={(item) => item.value}
        />
      <TouchableOpacity style = {{alignSelf:'flex-end',justifyContent:'flex-end',marginBottom:100,marginRight:30,height:60,width:60}}
          onPress={() => 
          this.FunctionToOpenSecondActivity()
           } >
     <Image 
        source = {require('../../Modules/Images/Next.png')} style={{height:60,width:60}}/>
         </TouchableOpacity>
      </View>
      
    );
  }
}


const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 40,
   backgroundColor: 'white',
  },
  item: {
    marginTop:2,
    paddingLeft: 20,
    fontSize: 14,
  },
  item2: {
    paddingHorizontal: 20,
    fontSize: 18,
    marginRight: 20,
    paddingTop: 10,
  },
  tableView:{
    flexDirection: 'row', 
    paddingHorizontal: 15,
    marginTop: 0,
  },
  logoContainer:{
    marginTop: 10,
    // backgroundColor: 'green',
    justifyContent: 'flex-start',
    alignItems : 'flex-start',
   
  },
  logo:{
    width: 55,
    height: 55,
    backgroundColor:'blue',
    borderRadius: 55/2,
  }, 
});