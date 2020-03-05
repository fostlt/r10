import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ScheduleScreen from '../screens/Schedule';
import SessionScreen from '../screens/Session';
import AboutScreen from '../screens/About';
import MapsScreen from '../screens/Map';
import FavesScreen from '../screens/Faves';
import {sharedScreenOptions} from './config';
import {createDrawerNavigator} from '@react-navigation/drawer';

const ScheduleStack = createStackNavigator();
const ScheduleStackScreens = props => {
  return (
    <ScheduleStack.Navigator screenOptions={sharedScreenOptions}>
      <ScheduleStack.Screen name="Schedule" component={ScheduleScreen} />
      <ScheduleStack.Screen name="Session" component={SessionScreen} />
    </ScheduleStack.Navigator>
  );
};
const FavesStack = createStackNavigator();
const FavesStackScreens = props => {
  return (
    <FavesStack.Navigator screenOptions={sharedScreenOptions}>
      <FavesStack.Screen name="Faves" component={FavesScreen} />
      <FavesStack.Screen name="Session" component={SessionScreen} />
    </FavesStack.Navigator>
  );
};
const AboutStack = createStackNavigator();
const AboutStackScreens = props => {
  return (
    <AboutStack.Navigator screenOptions={sharedScreenOptions}>
      <AboutStack.Screen name="About" component={AboutScreen} />
    </AboutStack.Navigator>
  );
};
const MapStack = createStackNavigator();
const MapStackScreens = props => {
  return (
    <MapStack.Navigator screenOptions={sharedScreenOptions}>
      <MapStack.Screen name="Maps" component={MapsScreen} />
    </MapStack.Navigator>
  );
};

const Drawer = createDrawerNavigator()
const DrawerNav = props => (
    <Drawer.Navigator>
        <Drawer.Screen name="Schedule" component={ScheduleStackScreens}/>
        <Drawer.Screen name="Faves" component={FavesStackScreens}/>
        <Drawer.Screen name="About" component={AboutStackScreens}/>
        <Drawer.Screen name="Maps" component={MapStackScreens}/>
    </Drawer.Navigator>
)

export default DrawerNav;