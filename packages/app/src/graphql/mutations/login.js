import gql from 'graphql-tag';
import { notification } from 'antd';
//import userFragment from '../../fragments/user/userInfo';

export const loginMutation = gql`
  mutation LogujSe($email:  String!, $password: String!){
    login (
      email: $email,
      password: $password
    ){
      token
      user{
        name
        surname
        email
      }
    }
  }
  `;

export const createUserMutationOptions = ({ cleanup }) => ({
 // refetchQueries: ['GetUsers'],
  onCompleted: ({ loggedIn }) => {
    notification.success({
      message: 'Uspješno logovan',
      description: `Korisnik ${loggedIn.user.name} uspješno prijavljen`,
      //duration: 2,
    });
    if (cleanup) cleanup();
  },
  onError: (error) => {
    notification.error({
      message: 'Prijava neuspješna',
      description: `Prijava nije uspjela: ${error.message}`,
    });
  },
});
