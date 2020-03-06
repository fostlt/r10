import React, {Component} from 'react';
import {Text, ActivityIndicator} from 'react-native';
import About from './About';
import gql from 'graphql-tag';
import {Query} from 'react-apollo';
import {formatSessionData} from '../../lib/dataFormatHelpers';

const GET_ALL_CONDUCTS = gql`
  {
    allConducts {
      id
      description
      title
      order
    }
  }
`;

class AboutContainer extends Component {
  render() {
    //const {navigation} = this.props;
    return (
      <Query query={GET_ALL_CONDUCTS}>
        {({loading, error, data}) => {
          if (loading) return <ActivityIndicator />;
          if (error) return <Text>Error</Text>;
          const formattedData = formatSessionData(data.allConducts);
          return <About  data={formattedData} />;
        }}
      </Query>
    );
  }
}

export default AboutContainer;
