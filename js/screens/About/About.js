import React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  Image,
  SectionList,
  TouchableOpacity,
  LayoutAnimation,
} from 'react-native';
import styles from './styles';
import {ScrollView} from 'react-native-gesture-handler';

import CodeOfConduct from '../../components/CodeOfConduct';

const About = ({data}) => {
  console.log(data);
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.logo}>
          <Image source={require('../../assets/images/r10_logo.png')} />
        </View>
        <Text style={styles.text}>
          R10 is a conference that focuses on just about any topic related to
          dev.
        </Text>
        <Text style={styles.title}>Date &amp; Venue</Text>
        <Text style={styles.text}>
          The R10 conference will take place on Saturday, December 8, 2018 in
          Vancouver, BC. Julima is awesome. @GALLARDOJULIMA
        </Text>
        <Text style={styles.title}>Code of Conduct</Text>
      </View>

      <SectionList
        sections={data}
        renderItem={({item}) => (
          <CodeOfConduct title={item.title} description={item.description} />
        )}
        keyExtractor={item => item.id}
      />
    </ScrollView>
  );
};

export default About;
