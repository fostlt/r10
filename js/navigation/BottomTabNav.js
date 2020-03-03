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
const BottomTabNav = createBottomTabNavigator();
const BottomTabNavScreens = props => (
  <BottomTabNav.Navigator
    initialRouteName="Schedule"
    tabBarOptions={{
      activeTintColor: 'white',
      inactiveTintColor: 'grey',
      labelStyle: {
        fontSize: 10,
        fontFamily: 'Montserrat-Light',
      },
      style: {
        backgroundColor: 'black',
      },
    }}
    screenOptions={({route}) => ({
      tabBarIcon: ({focused, color, size}) => {
        let iconName;
        if (route.name === 'Schedule') {
          iconName = focused ? 'calendar' : 'calendar-blank-outline';
        } else if (route.name === 'Faves') {
          iconName = focused ? 'heart' : 'heart-outline';
        } else if (route.name === 'About') {
          iconName = focused ? 'information' : 'information-outline';
        } else if (route.name === 'Map') {
          iconName = focused ? 'map' : 'map-outline';
        }
        return (
          <MaterialCommunityIcons name={iconName} size={size} color={color} />
        );
      },
    })}>
    <BottomTabNav.Screen name="Schedule" component={ScheduleStackScreens} />
    <BottomTabNav.Screen name="Faves" component={FavesStackScreens} />
    <BottomTabNav.Screen name="About" component={AboutStackScreens} />
    <BottomTabNav.Screen name="Map" component={MapStackScreens} />
  </BottomTabNav.Navigator>
);
export default BottomTabNavScreens;
