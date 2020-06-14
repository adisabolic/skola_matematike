import gql from 'graphql-tag';

export const getNotificationsQuery = gql`
  query GetNotifications($limit: Int, $offset: Int, $condition: NotificationConditionType) {
    notifications(limit: $limit, offset: $offset, condition: $condition) {
        nodes {
          _id
          author { 
          	_id
            name
            surname
          }
          text
          createdAt
          updatedAt
        }
    }
  }

`;

export const getNotificationsQueryOptions = ( condition = {},) => ({
  variables: { limit: 3, condition: condition },
  fetchPolicy: 'network-only',
  notifyOnNetworkStatusChange: true,
});
