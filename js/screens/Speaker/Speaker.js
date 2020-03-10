import React from 'react';
import styles from './styles';
import {
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  Image,
  SectionList,
  Linking
 
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Speaker = ({data, datum}) => {
  const navigation = useNavigation();
  console.log('Speaker Data: ', data);

  return (
    <SafeAreaView>
        <View style={styles.container}>
          <Image
            style={styles.image}
            source={{uri: `${data.params.datum.params.item.speaker.image}`}}
          />
          <Text style={styles.name}>
            {data.params.datum.params.item.speaker.name}
          </Text>
          <Text style={styles.bio}>
            {data.params.datum.params.item.speaker.bio}
          </Text>
          <TouchableOpacity style={styles.button}
              onPress={() => Linking.openURL(`${data.params.datum.params.item.speaker.url}`)}
          >
            <Text style={styles.buttonText}>Read more on Wikipedia</Text>
          </TouchableOpacity>
        </View>
    </SafeAreaView>
  );
};

export default Speaker;
