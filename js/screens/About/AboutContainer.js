import React, {Component} from 'react';
import {Text} from 'react-native';
import About from './About';
import gql from 'graphql-tag';
import {Query} from 'react-apollo';

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
    return (
      <Query query={GET_ALL_CONDUCTS}>
        {({loading, error, data}) => {
          if (loading) return <Text>Error</Text>;
          if (error) return <Text>Error</Text>;
          return <About data={data} />;
        }}
      </Query>
    );
  }
}

export default AboutContainer;
