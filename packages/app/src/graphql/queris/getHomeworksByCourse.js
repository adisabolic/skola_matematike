import gql from 'graphql-tag';
import { notification } from 'antd';

export const getHomeworksByCourseQuery = gql`
query getHomeworksByCourse ($course: ID!) {
    homeworksByCourse (course: $course) {
        nodes {
            _id
            dueDate
            file
            author  {
                _id
                name
                surname
            }
            course { 
                _id
                name
            }
        createdAt
        }
    }
}
  `;

  export const getHomeworksByCourseQueryOptions = (id,) => ({
    variables: { course: id },
    fetchPolicy: 'network-only',
    notifyOnNetworkStatusChange: true,
  });

