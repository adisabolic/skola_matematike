import gql from 'graphql-tag';
import { notification } from 'antd';
//import userFragment from '../../fragments/user/userInfo';

export const getCurrentUserQuery = gql`
    query currentUser{
        currentUser {
            name
            surname
            email
            course {
                _id
                name
            }
            role {
                flag
                name
            }
        }
    }
  `;

