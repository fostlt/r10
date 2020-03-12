import React, {Component} from 'react';
import Faves from './Faves';
import { GET_ALL_SESSIONS } from '../../config/queries';
import {FavesContext} from '../../context/FavesContext';
import {formatSessionData} from '../../lib/dataFormatHelpers';
import {Query} from 'react-apollo';
import {Text, ActivityIndicator} from 'react-native';


class FavesContainer extends Component {
  
  render() {
    return (
      <FavesContext.Consumer>
        {({faveIds}) => (
          <Query query={GET_ALL_SESSIONS}>
          {({loading, error, data}) => {
            if (loading) return <ActivityIndicator />;
            if (error) return <Text>Error</Text>;
            if (data) {
              const formattedData = formatSessionData(data.allSessions);
              return <Faves data={formattedData} faveIds={faveIds} />;
            }
          }}
        </Query>
      )}
    </FavesContext.Consumer>
  );
}
}

export default FavesContainer;