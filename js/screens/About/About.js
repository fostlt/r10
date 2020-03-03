import React from 'react';
import {Text, View, SafeAreaView, Image} from 'react-native';
import styles from './styles';

const About = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logo}>
        <Image source={require('../../assets/images/r10_logo.png')} />
      </View>
      <Text>
        {' '}
        R10 is a conference that focuses on just about any topic related to dev.
      </Text>
      <Text>Date &amp; Venue</Text>
      <Text>
        The R10 conference will take place on Tuesday, June 27, 2019 in
        Vancouver, BC.
      </Text>
      <Text>Julima is awesome. @GALLARDOJULIMA</Text>
    </SafeAreaView>
  );
};

export default About;
