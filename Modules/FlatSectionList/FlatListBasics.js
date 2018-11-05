import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View, ScrollView,ActivityIndicator,Image } from 'react-native';

export default class FlatListBasics extends Component {
  
constructor(props)
  {
 
    super(props);
    this.state = { 
    isLoading: true,
    ActivityIndicator
  }
  }

  //API hit
  FetchRecordsAPI()
  {
    return fetch('https://reactnativecode.000webhostapp.com/FruitsList.php')
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        isLoading: false,
        dataSource: responseJson
      });
    })
    .catch((error) => {
      console.error(error);
    });
  }

  render() {
  const spinner = this.state.isLoading ?
  <ActivityIndicator size='large'/> : null;
   var MyArray = [{name:'Aman ghgfhgf nvghjgn ngfhjfg vghdscsdfvdgdfg vgbhfghfgb vghnfgnv ghnfgbn cvhnfgg vnfgnhfg',value:'1'},{name:'Nav',value:'2'},{name:'Radha',value:'3'}]
   var SampleNameArray = [ "John", "Amy", "Smith", "Jef", "Stenly", "Max" ];
   {this.FetchRecordsAPI()}
    return (
      <ScrollView>
      <View style={styles.container}>

      {/* Without Flat list */}
         { SampleNameArray.map((item)=>(
         <Text style={styles.item}> {item} </Text>)
         )}

      {/* Flat list with static array */}
        <FlatList
          data={MyArray}
          renderItem={({item}) => <View style = {styles.tableView}>
            <View style = {styles.logoContainer}>
          <Image 
          source = {require('../../Modules/Images/logo.png')} style={styles.logo}/>
          </View>
          <View>
          <Text style={styles.item2}> {item.name} </Text>
          <Text style={styles.item}> {item.value} </Text>
          </View>
          </View>
        }
         keyExtractor={(item) => item.value}
        />
       
       {/* Flat list from API response */}
       {spinner}
        <FlatList
          data={ this.state.dataSource}
          renderItem={({item}) => <Text style={styles.item}> {item.fruit_name}</Text>}
         keyExtractor={(item) => item.fruit_name}
        />
      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 55
  },
  item: {
    padding: 10,
    fontSize: 18,
    // height: 30,
  },
  item2: {
    padding: 10,
    fontSize: 18,
    marginRight: 20,
    // height: 30,
    color :'red'
  },
  tableView:{
    flexDirection: 'row', 
    padding: 10
  },
  logoContainer:{
    marginTop: 0,
    // backgroundColor: 'green',
    justifyContent: 'flex-start',
    alignItems : 'flex-start',
   
  },
  logo:{
    width: 55,
    height: 55,
  },
})
