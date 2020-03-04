import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  SectionList,
} from 'react-native';

// import gql from 'graphql-tag';

// const data = (QUERY_ALL_CONDUCTS = gql`
//   query getAllConducts($order: ConductOrderByInput) {
//     allConducts(orderBy: $order) {
//       id
//       description
//       title
//       order
//     }
//   }
// `);

const Schedule = ({navigation}) => (
  <View>
    <Text>This is the Schedule Screen</Text>
    <TouchableOpacity onPress={() => navigation.navigate('Session')}>
      <Text> Go to Session</Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={() => navigation.navigate('Speaker')}>
      <Text>Go to Speaker Modal</Text>
    </TouchableOpacity>

  </View>
);

export default Schedule;
