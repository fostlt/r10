import React, {Component} from 'react';
import {Text, View, LayoutAnimation, TouchableOpacity} from 'react-native';
import styles from './styles';

class CodeOfConduct extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    expanded: false,
  };
  render() {
    return (

      <View style={{overflow: 'hidden'}}>
        <TouchableOpacity
          onPress={() => {
            LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
            this.setState({expanded: !this.state.expanded});
          }}>
          <View style={styles.conductContainer}>
            <Text style={styles.symbol}>{this.state.expanded ? '-' : '+'}</Text>
            <Text style={styles.text}>{this.props.title}</Text>
          </View>
          {/* <Text>
              Press me to {this.state.expanded ? 'collapse' : 'expand'}!
            </Text> */}
        </TouchableOpacity>
        {this.state.expanded && <Text style={styles.subtext}>{this.props.description}</Text>}
      </View>
    );
  }
}

export default CodeOfConduct;
