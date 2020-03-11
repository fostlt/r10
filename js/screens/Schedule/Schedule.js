import React from 'react';
import {Text, TouchableOpacity, View, SectionList} from 'react-native';
import moment from 'moment';
import styles from './styles';
import {ScrollView, TouchableHighlight} from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';

const Schedule = ({data, faveIds}) => {
  const navigation = useNavigation();

  console.log('faveIds: ', faveIds);
  return (
    <ScrollView>
      <View style={styles.container}>
        <SectionList
          sections={data}
          renderItem={({item}) => (
            <View>
              <TouchableOpacity
                onPress={() =>
                  navigation.push('Session', {
                    item,
                  })
                }>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.location}>{item.location}</Text>
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={item => item.id}
          renderSectionHeader={({section}) => {
            const time = moment(section.title).format('LT');
            return <Text style={styles.moment}>{`${time}`}</Text>;
          }}
        />
      </View>
    </ScrollView>
  );
};

export default Schedule;
