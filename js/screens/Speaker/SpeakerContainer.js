import React, {Component} from 'react';
import Speaker from './Speaker';
import {GET_ALL_SESSIONS} from '../../config/queries';
import {Query} from 'react-apollo';
import {formatSessionData} from '../../lib/dataFormatHelpers';

class SpeakerContainer extends Component {
  render() {
    return (
      <Query query={GET_ALL_SESSIONS}>
        {({loading, error, data}) => {
          if (loading) return <ActivityIndicator />;
          if (error) return <Text>Error</Text>;
          console.log('SpeakerContainer: ', this.props);
          if (data) {
            return (
              <Speaker
                data={this.props.route}
                navigation={this.props.navigation}
              />
            );
          }
        }}
      </Query>
    );
  }
}

export default SpeakerContainer;
