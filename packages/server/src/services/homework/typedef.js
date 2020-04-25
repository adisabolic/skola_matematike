import gql from 'graphql-tag';

export default gql`
    type Homework {
        _id: ID!
		author: User!
        course: Course!
		dueDate: Date
		file: String
        createdAt: DateTime
        updatedAt: DateTime
    }

    extend type Query {
        homeworks(condition: HomeworkConditionType, limit: Int, offset: Int, sortBy: String): HomeworksConnection!
		homeworkById(id: ID!): Homework!
        homeworksByCourse(course: ID!, limit: Int, offset: Int, sortBy: String): HomeworksConnection!
    }

    extend type Mutation {
        homeworkCreate(input: HomeworkInputType!): Homework!
		homeworkUpdate(id: ID!, input: HomeworkUpdateInputType!): Homework!
        homeworkDelete(id: ID!): Homework!
    }

    input HomeworkConditionType {
		author: ID
        course: ID
    }

    input HomeworkInputType {
		author: ID!
        course: ID!
		dueDate: Date
		file: String
    }

    input HomeworkUpdateInputType {
		dueDate: Date
		file: String
    }

    type HomeworksConnection {
        nodes: [Homework]!
    }
`;
