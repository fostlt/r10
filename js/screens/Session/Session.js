import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  SectionList,
  Image
} from 'react-native';
import styles from './styles'
import moment from 'moment';
//import SessionInfo from '../../components/SessionInfo';
//import styles from './styles';
//import {ScrollView} from 'react-native-gesture-handler';

const Session = ({data, datum}) => {
  console.log("Test: ", datum)
  return (
    <SafeAreaView>
    <View style={styles.container}>
      <Text style={styles.location}>{datum.params.item.location}</Text>
      <Text style={styles.title}>{datum.params.item.title}</Text>
      <Text style={styles.time}>{moment(datum.params.item.startTime).format('LT')}</Text>
      <Text style={styles.description}>{datum.params.item.description}</Text>
      
      <Text style={styles.presented}>Presented by:</Text>
      <View style={styles.speakerContainer}>
      <Image 
      style={styles.image}
      source={{uri: `${datum.params.item.speaker.image}`}}
      />
      <Text style={styles.nameTitle}>{datum.params.item.speaker.name}</Text>
      </View>
    </View>
    </SafeAreaView>
  );
};
export default Session;
