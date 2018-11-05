/** @format */

import {AppRegistry} from 'react-native';
import Login from './Modules/Login/Login';
import LoginScreen from './Modules/Login/LoginScreen';
import Home from './Modules/Home/Home';
import FlatListBasics from './Modules/FlatSectionList/FlatListBasics';
import SearchList from './Modules/FlatSectionList/SearchResults';
import {name as appName} from './app.json';
import UserDetail from './Modules/Login/UserDetail';
import OTP from './Modules/Login/OTP';
import DriverDetail from './Modules/Login/DriverDetail';
import SelectDriverDetail from './Modules/Login/SelectDriverDetail';
import ShareRideList from './Modules/Login/ShareRideList';
import DestinationLocationDriver from './Modules/Login/DestinationLocationDriver';
import DestinationLocation from './Modules/Login/DestinationLocation';
//import { StackNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation';



// const  NavigationScreen = StackNavigator(
//     {
//       Login : {screen: Login},
//       Home : {screen : Home},
//     }
// );

const Nav = createStackNavigator({
 // OTP : {screen : OTP},
  LoginScreen : {screen : LoginScreen},
  OTP : {screen : OTP},
  UserDetail : {screen : UserDetail},
  Login: { screen: Login },
  Home: { screen: Home },
  DriverDetail : {screen : DriverDetail},
  FlatListBasics : {screen : FlatListBasics},
  SearchList : {screen : SearchList},
  SelectDriverDetail : {screen : SelectDriverDetail},
  ShareRideList : {screen : ShareRideList},
  DestinationLocationDriver : {screen : DestinationLocationDriver},
  DestinationLocation : {screen : DestinationLocation},
});

AppRegistry.registerComponent(appName, () => Nav);
