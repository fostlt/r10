import React, {Component} from 'react';
import {Text, View, LayoutAnimation, TouchableOpacity} from 'react-native';
import styles from './styles';

class SessionInfo extends React.Component {
  constructor(props) {
    super(props);
    console.log(props)
  }
//   state = {
//     expanded: false,

//   };
  render() {
    return (


     <View>
         <Text>
            {this.props.title}
            
         </Text>
     </View>
        
    );
  }
}

export default SessionInfo;
