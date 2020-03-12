import React from 'react';
import styles from './styles';
import {
  Text,
  TouchableOpacity,
  View,
  SectionList,
  SafeAreaView,
} from 'react-native';
import moment from 'moment';
import {useNavigation} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Faves = ({data, faveIds}) => {
  const navigation = useNavigation();
  console.log('list:', faveIds);
  return faveIds == 'undefined' ? (
    <View style={styles.favesContainer}>
      <Text style={styles.faves}>You have not favourited anything! </Text>
    </View>
  ) : (
    <View>
      <SectionList
        sections={data}
        renderItem={({item}) =>
          faveIds.includes(item.id, 0) ? (
            <TouchableOpacity
              style={styles.session}
              onPress={() => {
                navigation.navigate('Session', {
                  item,
                });
              }}>
              <View>
                <Text style={styles.time}>
                  {moment(item.time).format('LT')}
                </Text>
                <Text style={styles.title}>{item.title}</Text>
                <View style={styles.subContainer}>
                <Text style={styles.location}>{item.location}</Text>
                <Text style={styles.heart}>
                {faveIds.includes(item.id, 0) ? (
                  <MaterialCommunityIcons name="heart" color="red" />
                ) : null}</Text>
                </View>
              </View>
            </TouchableOpacity>
          ) : null
        }
        keyExtractor={item => item.id}
        renderSectionHeader={({section}) => <></>}
      />
    </View>
  );
};

export default Faves;
