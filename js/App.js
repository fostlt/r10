/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {ApolloProvider} from '@apollo/react-hooks';
import client from './config/api';

import {NavigationContainer} from '@react-navigation/native';
import ScheduleNav from './navigation';
import FavesProvider from './context/FavesContext';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <FavesProvider>
      <NavigationContainer>
        <ScheduleNav />
      </NavigationContainer>
      </FavesProvider>
    </ApolloProvider>
  );
};

export default App;
