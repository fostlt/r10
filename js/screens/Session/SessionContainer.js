import React, {Component} from 'react';
import Session from './Session';
import {FavesContext} from '../../context/FavesContext';

class SessionContainer extends Component {
  constructor(props) {
    super(props);
  console.log(props);
  }
  render() {
    return (
      <FavesContext.Consumer>
        {{faveIds, addFaveSession, removeFaveSessionIds, navigation}} => (
        <Session
          faveIds={faveIds}
          addFaveSession={addFaveSession}
          navigation={navigation}
          removeFaveSessionId={removeFaveSessionIds}
        />
        )
      </FavesContext.Consumer>
    );
  }
}

export default SessionContainer;
