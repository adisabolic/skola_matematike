import gql from 'graphql-tag';

export default gql`
    type HomeworkComment {
        _id: ID!
		author: User!
		homework: Homework!
		text: String!
		createdAt: DateTime
		updatedAt: DateTime
    }

    extend type Query {
        homeworkComments(condition: HomeworkCommentConditionType, limit: Int, offset: Int, sortBy: String): HomeworkCommentsConnection!
		homeworkCommentById(id: ID!): HomeworkComment!
        homeworkCommentsByHomework(homework: ID!, limit: Int, offset: Int, sortBy: String): HomeworkCommentsConnection!
    }

    extend type Mutation {
        homeworkCommentCreate(input: HomeworkCommentInputType!): HomeworkComment!
		homeworkCommentUpdate(id: ID!, input: HomeworkCommentUpdateInputType!): HomeworkComment!
        homeworkCommentDelete(id: ID!): HomeworkComment!
    }

    input HomeworkCommentConditionType {
		author: ID
		homework: ID
		text: String
    }

    input HomeworkCommentInputType {
		author: ID!
		homework: ID!
		text: String!
    }

    input HomeworkCommentUpdateInputType {
      	text: String
    }

    type HomeworkCommentsConnection {
        nodes: [HomeworkComment]!
    }
`;
