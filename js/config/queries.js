import {gql} from 'apollo-boost';

export const GET_ALL_SESSIONS = gql`
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

export const ALL_CONDUCTS = gql`
  query {
    allConducts {
      id
      description
      title
      order
    }
  }
`;
