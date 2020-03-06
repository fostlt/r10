import React, {Component} from 'react';
import Schedule from './Schedule';
import gql from 'graphql-tag';
import {Query} from 'react-apollo';
import {Text, ActivityIndicator} from 'react-native';
import {formatSessionData} from '../../lib/dataFormatHelpers';

const GET_ALL_SESSIONS = gql`
  query {
    allSessions {
      id
      description
      location
      startTime
      title
      speaker {
        id
        bio
        image
        name
        url
      }
    }
  }
`;

class ScheduleContainer extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <Query query={GET_ALL_SESSIONS}>
        {({loading, error, data}) => {
          if (loading) return <ActivityIndicator/>;
          if (error) return <Text>Error</Text>;
          if (data) {
            const formattedData = formatSessionData(data.allSessions);
            return <Schedule navigation={navigation} data={formattedData} />;
          }
        }}
      </Query>
    );
  }
}

export default ScheduleContainer;
