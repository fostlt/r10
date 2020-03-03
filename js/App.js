/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';


import { NavigationContainer } from '@react-navigation/native';
import ScheduleNav from './navigation';

const App = () => {
  return (
    <NavigationContainer>
      <ScheduleNav />
    </NavigationContainer>
  );
};

export default App;
