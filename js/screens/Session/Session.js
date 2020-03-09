import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  SectionList,
} from 'react-native';
import SessionInfo from '../../components/SessionInfo';
//import styles from './styles';
//import {ScrollView} from 'react-native-gesture-handler';

const Session = ({data}) => {
  console.log(data)
  return (
    <View>
      <SectionList
      sections={data}
      keyExtractor={data => data}
      renderItem={({item}) => (
        <View>
       <SessionInfo title={item.title} description={item.description} 
       id={item.id} startTime={item.startTime}
       
       
       />
 
        </View>
      )}
      
      />
    </View>
  );
};
export default Session;
