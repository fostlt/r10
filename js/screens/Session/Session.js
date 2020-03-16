import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  SectionList,
  Image,
  Linear,
} from 'react-native';
import styles from './styles';
import moment from 'moment';
import {useNavigation} from '@react-navigation/native';

// import LinearGradient from 'react-native-linear-gradient';

const Session = ({datum, faveIds, addFaveSession, removeFaveSessionIds}) => {
  const navigation = useNavigation();
  console.log('Test: ', datum);
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.location}>{datum.params.item.location}</Text>
        <Text style={styles.title}>{datum.params.item.title}</Text>
        <Text style={styles.time}>
          {moment(datum.params.item.startTime).format('LT')}
        </Text>
        <Text style={styles.description}>{datum.params.item.description}</Text>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Speaker', {
              datum,
            })
          }>
          <Text style={styles.presented}>Presented by:</Text>
          <View style={styles.speakerContainer}>
            <Image
              style={styles.image}
              source={{uri: `${datum.params.item.speaker.image}`}}
            />
            <Text style={styles.nameTitle}>
              {datum.params.item.speaker.name}
            </Text>
          </View>
        </TouchableOpacity>

        {!faveIds.includes(datum.params.item.id) ? (
          <TouchableOpacity
            style={styles.button}
            onPress={() => addFaveSession(datum.params.item.id)}>
            <Text style={styles.buttonText}>Add to Faves</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.button}
            onPress={() => removeFaveSessionIds(datum.params.item.id)}>
            <Text style={styles.buttonText}>Remove from Faves</Text>
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
};
export default Session;
