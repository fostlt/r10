import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  SectionList,
  Item,
} from 'react-native';
import moment from 'moment';
import styles from './styles';
import {ScrollView} from 'react-native-gesture-handler';

const Schedule = ({navigation, data}) => {
  console.log(data);
  return (
    <ScrollView>
      {/* <Text>This is the Schedule Screen</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Session')}>
        <Text> Go to Session</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Speaker')}>
        <Text>Go to Speaker Modal</Text>
      </TouchableOpacity> */}
      <TouchableOpacity onPress={() => navigation.navigate('Session')}>
        <SectionList
          sections={data}
          renderItem={({item}) => (
            <View>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.location}>{item.location}</Text>
            </View>
          )}
          keyExtractor={item => item.id}
          renderSectionHeader={({section}) => {
            // console.log(section)
            const time = moment(section.title).format('LT');
            return <Text style={styles.moment}>{`${time}`}</Text>;
          }}
        />
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Schedule;
