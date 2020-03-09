import React, {Component} from 'react';
import {Text, ActivityIndicator} from 'react-native';
import About from './About';
import gql from 'graphql-tag';
import {Query} from 'react-apollo';
import {formatSessionData} from '../../lib/dataFormatHelpers';
import {ALL_CONDUCTS} from '../../config/queries';

class AboutContainer extends Component {
  render() {
    return (
      <Query query={ALL_CONDUCTS}>
        {({loading, error, data}) => {
          if (loading) return <ActivityIndicator />;
          if (error) return <Text>Error</Text>;
          if (data) {
            const formattedData = formatSessionData(data.allConducts);
            return <About data={formattedData} />;
          }
        }}
      </Query>
    );
  }
}

export default AboutContainer;
