import gql from 'graphql-tag';
import { notification } from 'antd';

export const createHWCommentMutation = gql`
mutation homeworkCommentCreate ($input: HomeworkCommentInputType!) { 
	homeworkCommentCreate (input: $input) {
    _id
  }
}
`;

export const createHWCommentMutationOptions = ({ cleanup }) => ({
    refetchQueries: ['GetHomeworkComments'],
    onCompleted: ({ homeworkCommentCreate }) => {
        notification.success({
            message: 'Dodan novi komentar!',
            description: `Nalog broj ${homeworkCommentCreate._id} uspješno dodan.`,
            duration: 3,
        });
         if (cleanup) cleanup();
    },
    onError: (error) => {
        notification.error({
            message: 'Pokušaj kreiranja nije uspio!',
            description: `Neuspješno kreiranje komentara: ${error.message}`,
        });
    },
});