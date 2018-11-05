import React, { Component } from 'react';
import { View, Text, Image, StyleSheet,TouchableOpacity,FlatList } from 'react-native';

export default class ShareRideList extends Component {
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
    this.props.navigation.navigate('SelectDriverDetail');
  }

  FunctionToOpenSecondActivity = () =>
  {
      this.props.navigation.navigate('DestinationLocation');
  }

  render() {
    var MyArray = [{name:'Aman',value:'1',drivingSkills:'Good',carModel:'Chandigarh',rating:'Delhi',price:'Rs 430'},{name:'Nav',value:'2',drivingSkills:'Good',carModel:'Chandigarh',rating:'Railway Station Delhi',price:'Rs 430'}]
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
         <View style = {{marginLeft:15,alignSelf:'flex-start',flexDirection:'column',height:40}}>
         <Text style = {{alignSelf:'flex-start',fontSize:17,marginTop:5}}>Sector 34C Chandigarh</Text>
           </View>
           <Image
        source = {require('../../Modules/Images/Clock.png')} style={{height:35,width:40,marginLeft:50}}/>
        </View>
        <View style = {{alignSelf:'flex-start',flexDirection:'row',height:1,width :'100%',backgroundColor:'gray'}}/>
        <View style = {{marginLeft:10,alignSelf:'flex-start',flexDirection:'column',height:40}}>
         <Text style = {{alignSelf:'flex-start',fontSize:13,marginTop:5}}>Average duration of journey</Text>
         <Text style = {{alignSelf:'flex-start',fontSize:16,marginTop:2}}>10h 60mins</Text>
           </View>
        
       
        <FlatList
          data={MyArray}
          renderItem={({item}) => 
          <View>
            <TouchableOpacity onPress={() => 
          this.FunctionToOpenSecondActivity()
           } >
          <View style = {{marginTop:8,alignSelf:'flex-start',flexDirection:'row',height:1,width :'100%',backgroundColor:'gray'}}/>
          <View style = {{marginTop:10,alignSelf:'flex-start',flexDirection:'row',height:1,width :'100%',backgroundColor:'gray'}}/> 
           
          <View style = {styles.tableView}>
            <View style = {styles.logoContainer}>
            <View style={{flexDirection:'row'}}>
          <Image 
          source = {require('../../Modules/Images/logo.png')} style={styles.logo}/>
          <Text style={styles.item2}> {item.name} </Text>
          </View>
          <View style = {{marginTop:10,alignSelf:'flex-start',flexDirection:'row',height:1,width :'100%',backgroundColor:'gray'}}/>
          
           <View style = {{alignSelf:'stretch',flexDirection:'row',justifyContent:'space-between'}}>
           <View style = {{alignSelf:'flex-start',flexDirection:'column'}}>
           <View style = {{alignSelf:'flex-start',flexDirection:'row',marginTop:5}}>
          <Text style={[styles.item]}>13-Jul-2018</Text>
          </View>
          <View style = {{alignSelf:'flex-start',flexDirection:'row'}}>
          <Text style={[styles.item,{marginTop:5,}]}>14:00</Text>
          <Text style={[styles.item,{alignSelf:'flex-start' ,marginTop:8,paddingLeft: 50,}]}>{item.carModel} </Text>
          </View>
          <View style = {{alignSelf:'flex-start',flexDirection:'row'}}>
          <Text style={[styles.item,{marginTop:5,}]}>21:00</Text>
          <Text style={[styles.item,{alignSelf:'flex-start' ,marginTop:8,paddingLeft: 50}]}> {item.rating} </Text>
          </View>
          </View>
          <View style = {{alignSelf:'flex-end',marginVertical:10,marginRight:20}}>
          <Text style={{fontSize:28,fontWeight:'700'}}>रु 430</Text>
          </View>
          </View>

          {/* <View style = {{marginTop:8,alignSelf:'flex-start',flexDirection:'row',height:1,width :'120%',backgroundColor:'lightgray',marginLeft:-70}}/>
          <View style = {{marginTop:12,alignSelf:'flex-start',flexDirection:'row',height:1,width :'120%',backgroundColor:'lightgray',marginLeft:-70}}/> */}
          </View>
          </View>
          </TouchableOpacity>
          </View>
        }
         keyExtractor={(item) => item.value}
        />
       <View style = {{marginTop:8,alignSelf:'flex-start',flexDirection:'row',height:1,width :'120%',backgroundColor:'lightgray',marginLeft:-70}}/>
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
    marginTop:1,
    paddingLeft: 20,
    fontSize: 16,
  },
  item2: {
    paddingHorizontal: 20,
    fontSize: 23,
    marginRight: 20,
    paddingTop: 10,
  },
  tableView:{
    flexDirection: 'row', 
    marginTop: 0,
    width:'100%'
  },
  logoContainer:{
    marginTop: 10,
    width : '100%',
    // backgroundColor: 'green',
    justifyContent: 'flex-start',
    alignItems : 'flex-start',
   
  },
  logo:{
    width: 50,
    height: 50,
    marginLeft : 15,
    backgroundColor:'blue',
    borderRadius: 50/2,
  }, 
});