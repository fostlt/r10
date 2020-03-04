/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {ApolloProvider} from 'react-apollo';
import client from './config/api';


import { NavigationContainer } from '@react-navigation/native';
import ScheduleNav from './navigation';

const App = () => {
  return (
    <ApolloProvider client={client}>
    <NavigationContainer>
      <ScheduleNav />
    </NavigationContainer>
    </ApolloProvider>
  );
};

export default App;
