import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  SectionList,
  Item,
} from 'react-native';
//import styles from './styles';
//import {ScrollView} from 'react-native-gesture-handler';

const Session = ({data}) => {
  console.log(data)
  return (
    <View>
      <SectionList
      sections={data}
      keyExtractor={data => data.id}
      renderItem={({item}) => (
        <View>
        <Text>{item.location}</Text>
        <Text>{item.title}</Text>
        <Text>{item.name}</Text>
        
        </View>
      )}
      
      />
    </View>
  );
};
export default Session;
