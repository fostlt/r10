import React from 'react';
import {Text, View, SafeAreaView, Image} from 'react-native';
import styles from './styles';

const About = ({data}) => {
  console.log(data);
  return (
    <SafeAreaView >
        <View style={styles.container}>
      <View style={styles.logo}>
        <Image source={require('../../assets/images/r10_logo.png')} />
      </View>
      <Text style={styles.text}>
        R10 is a conference that focuses on just about any topic related to dev.
      </Text>
      <Text style={styles.title}>Date &amp; Venue</Text>
      <Text style={styles.text}>
        The R10 conference will take place on Saturday, December 8, 2018 in
        Vancouver, BC.
      </Text>
      <Text style={styles.title}>Code of Conduct</Text>
      <Text>Julima is awesome. @GALLARDOJULIMA</Text>
      <Text style={styles.text}>© RED Academy 2020</Text>
      </View>
    </SafeAreaView>
  );
};

export default About;
