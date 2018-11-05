import React, { Component } from 'react';
import { View, Text, Image, StyleSheet,TouchableOpacity,FlatList } from 'react-native';

export default class DestinationLocationDriver extends Component {
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
    this.props.navigation.navigate('DestinationLocation');
  }
s
  FunctionToOpenSecondActivity = () =>
  {
      this.props.navigation.navigate('Home');
  }

  render() {
    var MyArray = [{name:'Add Work',value:'1',image:require('../../Modules/Images/Bag.png')},{name:'Saved Places',value:'2',image:require('../../Modules/Images/EmptyStar.png')}]
    var MyArray2 = [{name:'Room',value:'1',image:require('../../Modules/Images/EmptyStar.png'),address:'3341, sector 47 D'},{name:'ISBT Sector 43',value:'2',image:require('../../Modules/Images/Time.png'),address:'sector 43, Chandigarh'},{name:'Dibon Software Solutions (P) Ltd',value:'3',image:require('../../Modules/Images/Time.png'),address:'ITC-2, IT Park, sector 67, Sahibzada Ajit Singh Nagar'},{name:'Chandigarh',value:'4',image:require('../../Modules/Images/Time.png'),address:'Daria'}]

    return (
      <View style = {styles.container}>
      <View style = {{shadowOffset:{ width: 0,  height: 5,},shadowColor: 'black',shadowOpacity: 0.2,}}>
      <View style = {{alignSelf:'flex-start',flexDirection:'row',height:220,width :'100%',backgroundColor:'white',}}>
      <TouchableOpacity style = {{alignSelf:'flex-start',justifyContent:'flex-start',marginLeft:10}}
          onPress={() => 
          this.popToPreviousView()
           } >
          <Image
        source = {require('../../Modules/Images/Back.png')} style={{height:30,width:40,marginTop:5}}/>
         </TouchableOpacity>
         <View style = {{marginLeft:10,alignSelf:'flex-start',flexDirection:'column',height:40,width :'81%',}}>
         {/* <Text style = {{alignSelf:'flex-start',fontSize:17,marginTop:5}}>Sector 34C Chandigarh</Text> */}
         <View style = {{alignSelf:'flex-start',marginTop:5,height:40,width :'100%',backgroundColor:'#ecedee'}}>
         <View style={{flexDirection:'row'}}>
          <Image 
          source = {require('../../Modules/Images/DateTime.png')} style={[styles.logo,,{marginTop:8,width:25,height:25,marginLeft : 10,}]}/>
          {/* <Text style={[styles.item2,{color:'gray',marginTop:8, paddingHorizontal: 20,}]}>Sector 34C Chandigarh</Text> */}
          <View style = {{marginLeft:0,alignSelf:'flex-start',flexDirection:'column',height:40}}>
          <Text style={[styles.item,{ marginTop:5,fontSize:10, paddingHorizontal: 13,}]}>When you ride?</Text>
          <Text style={[styles.item,{color :'black', paddingHorizontal: 13,}]}>13-07-2018 16:26:03</Text>
           </View>
          
          </View>
         </View>
         <View style = {{alignSelf:'flex-start',marginTop:5,height:40,width :'100%',backgroundColor:'#ecedee'}}>
         <View style={{flexDirection:'row'}}>
          <Image 
          source = {require('../../Modules/Images/Location.png')} style={[styles.logo,{marginTop:8,width:17,height:23,marginLeft : 10,}]}/>
          <Text style={[styles.item2,{color:'gray',marginTop:8, paddingHorizontal: 20,}]}>Sector 34C Chandigarh</Text>
          </View>
         </View>
         <View style = {{alignSelf:'flex-start',marginTop:5,height:40,width :'100%',backgroundColor:'#ecedee'}}>
         <View style={{flexDirection:'row'}}>
          <Image 
          source = {require('../../Modules/Images/Location.png')} style={[styles.logo,{marginTop:8,width:17,height:23,marginLeft : 10,}]}/>
          <Text style={[styles.item2,{color:'gray',marginTop:8, paddingHorizontal: 20,}]}>Destination</Text>
          </View>
         </View>
         <View style = {{alignSelf:'flex-start',marginTop:5,height:40,width :'100%',backgroundColor:'#ecedee'}}>
         <View style={{flexDirection:'row'}}>
          <Image 
          source = {require('../../Modules/Images/Rupees.png')} style={[styles.logo,{marginTop:10,width:10,height:15,marginLeft : 14,}]}/>
          <Text style={[styles.item2,{color:'gray',marginTop:8, paddingHorizontal: 23,}]}>Price Per Passenger</Text>
          </View>
         </View>
</View>
           </View>
        </View>
       <View>
        <FlatList
          data={MyArray}
          renderItem={({item}) => <View style = {styles.tableView}>
            <View style = {styles.logoContainer}>
            <View style={{flexDirection:'row'}}>
          <Image 
          source = {item.image} style={styles.logo}/>
          <Text style={styles.item2}> {item.name} </Text>
          </View>
          <View style = {{marginTop:15,alignSelf:'flex-start',flexDirection:'row',height:1,width :'100%',backgroundColor:'lightgray'}}/>
          </View>
          </View>
        }
         keyExtractor={(item) => item.value}
        />
        </View>
      <View style = {{marginTop:-2,height:7,width :'100%',backgroundColor:'#ecedee'}}/>
      <View>
        <FlatList
          data={MyArray2}
          renderItem={({item}) => 
          <View style = {styles.tableView2}>
            <View style = {[styles.logoContainer, {paddingVertical: 3,}]}>
            <View style={{flexDirection:'row'}}>
          <Image 
          source = {item.image} style={[styles.logo, {marginTop: 10,}]}/>
          <View style = {{marginLeft:0,alignSelf:'flex-start',flexDirection:'column',height:40}}>
          <Text style={[styles.item2,{ marginTop:0}]}> {item.name} </Text>
          <Text 
          numberOfLines={1}
          style={styles.item}> {item.address} </Text>
           </View>
          
          </View>
          <View style = {{marginTop:20,alignSelf:'flex-start',flexDirection:'row',height:1,width :'100%',backgroundColor:'lightgray'}}/>
          </View>
          </View>
        }
         keyExtractor={(item) => item.value}
        />
        </View>
      </View>

    );
  }
}


const styles = StyleSheet.create({
  container: {
    flexDirection:'column',
   flex: 1,
   paddingTop: 40,
   backgroundColor: 'white',
  },
  item: {
    paddingHorizontal: 25,
    fontSize: 18,
    marginRight: 20,
    fontSize: 14,
    color : 'gray',
    marginTop:2,
  },
  item2: {
    paddingHorizontal: 25,
    fontSize: 17,
    marginRight: 20,
   height:25,
  },
  tableView:{
    flexDirection: 'row', 
    paddingTop : 5,
    width:'100%',
    height:57,
  },
  tableView2:{
       paddingTop : 10,
    flexDirection: 'row', 
    width:'100%',
  },
  logoContainer:{
    paddingVertical: 9,
    width : '100%',
    // backgroundColor: 'green',
    justifyContent: 'flex-start',
    alignItems : 'flex-start',
  },
  logo:{
    width: 20,
    height: 20,
    marginLeft : 23,
  }, 
});