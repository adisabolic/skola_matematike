import gql from 'graphql-tag';
import { notification } from 'antd';

export const getHWCommentsByHWQuery = gql`
query getHWCommentsByHW ($homework: ID!) {
    homeworkCommentsByHomework (homework: $homework) {
      nodes {
        _id
        author  {
            _id
        	name
            surname
        }
        text
        createdAt
      }
    }
}
  `;

  export const getHWCommentsByHWQueryOptions = (id,) => ({
    variables: { homework: id },
    fetchPolicy: 'network-only',
    notifyOnNetworkStatusChange: true,
  });

