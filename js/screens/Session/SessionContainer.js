import React, {Component} from 'react';
import Session from './Session';
import {Query} from 'react-apollo';
import {Text, ActivityIndicator} from 'react-native';
//import {formatSessionData} from '../../lib/dataFormatHelpers';
import {GET_ALL_SESSIONS} from '../../config/queries';
import {FavesContext} from '../../context/FavesContext';

class SessionContainer extends Component {
  render() {
    return (
      <FavesContext.Consumer>
        {({addFaveSession, removeFaveSessionIds, faveIds}) => (
          <Query query={GET_ALL_SESSIONS}>
            {({loading, error, data}) => {
              if (loading) return <ActivityIndicator />;
              if (error) return <Text>Error</Text>;
              console.log('SessionContainer: ', this.props);
              if (data) {
                return (
                  <Session
                    datum={this.props.route}
                    navigation={this.props.navigation}
                    addFaveSession={addFaveSession}
                    removeFaveSessionIds={removeFaveSessionIds}
                    faveIds={faveIds}
                  />
                );
              }
            }}
          </Query>
        )}
      </FavesContext.Consumer>
    );
  }
}

export default SessionContainer;
