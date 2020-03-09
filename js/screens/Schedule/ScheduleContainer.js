import React, {Component} from 'react';
import Schedule from './Schedule';
import {Query} from 'react-apollo';
import {Text, ActivityIndicator} from 'react-native';
import {formatSessionData} from '../../lib/dataFormatHelpers';
import {GET_ALL_SESSIONS} from '../../config/queries'


class ScheduleContainer extends Component {
  render() {
    return (
      <Query query={GET_ALL_SESSIONS}>
        {({loading, error, data}) => {
          if (loading) return <ActivityIndicator/>;
          if (error) return <Text>Error</Text>;
          if (data) {
            const formattedData = formatSessionData(data.allSessions);
            return <Schedule data={formattedData} />;
          }
        }}
      </Query>
    );
  }
}

export default ScheduleContainer;
