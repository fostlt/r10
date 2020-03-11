import React, {Component} from 'react';
export const FavesContext = React.createContext();
import {queryFaves, deleteFave, createFave} from '../../config/models';

class FavesProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      faveIds: [],
    };
  }

  componentDidMount() {
    this.getFavedSessionIds();
  }

  getFavedSessionIds = async () => {
    try {
      const faves = await queryFaves();
      const ids = faves.map(f => f[0]);
      this.setState({faveIds: ids});
    } catch (e) {
      console.log(e);
    }
  };

  addFaveSession = async sessionId => {
    try {
      console.log("NewFav", newFav)
      const newFav = await createFave(sessionId);
      if (newFav) {
        this.setState({faveIds: [...this.state.faveIds, newFav.id]});
      }
      this.getFavedSessionIds();
    } catch {}
  };

  removeFaveSessionIds = async sessionId => {
    try {
      await deleteFave(sessionId);
      this.getFavedSessionIds();
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    return (
      <FavesContext.Provider
        value={{
          ...this.state,
          addFaveSession: this.addFaveSession,
          removeFaveSessionIds: this.removeFaveSessionIds,
          getFavedSessionIds: this.getFavedSessionIds
        }}>
        {this.props.children}
      </FavesContext.Provider>
    );
  }
}

export default FavesProvider;
