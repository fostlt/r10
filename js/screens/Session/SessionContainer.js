import React, {Component} from 'react';
import Session from './Session';
import {Query} from 'react-apollo';
import {Text, ActivityIndicator} from 'react-native';
import {formatSessionData} from '../../lib/dataFormatHelpers';
import {GET_ALL_SESSIONS} from '../../config/queries'


class SessionContainer extends Component {
  render() {
    return (
      <Query query={GET_ALL_SESSIONS}>
        {({loading, error, data}) => {
          if (loading) return <ActivityIndicator/>;
          if (error) return <Text>Error</Text>;
          if (data) {
            const formattedData = formatSessionData(data.allSessions);
            return <Session data={formattedData} />;
          }
        }}
      </Query>
    );
  }
}

export default SessionContainer;
