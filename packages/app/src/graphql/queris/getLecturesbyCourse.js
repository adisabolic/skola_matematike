import gql from 'graphql-tag';
import { notification } from 'antd';
//import userFragment from '../../fragments/user/userInfo';

export const getLecturesByCourseQuery = gql`
    query getLecturesByCourse ($course: ID!) {
        lecturesByCourse (course: $course) {
        nodes {
            _id
            description
            mentor {
                _id
                name
                surname
            }
            course { 
                _id
                name
            }
            cycle {
                _id
                year {
                    name
                  }
                ordinalNumber
            }
            week
            date
        }
        }
    }
  `;

  export const getLecturesByCourseQueryOptions = (id,) => ({
    variables: { course: id },
    fetchPolicy: 'network-only',
    notifyOnNetworkStatusChange: true,
  });

