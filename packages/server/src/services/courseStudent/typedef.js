import gql from 'graphql-tag';

export default gql`
    type CourseStudent {
        _id: ID!
        course: Course!
		student: User!
		enterDate: Date
		leaveDate: Date
    }

    extend type Query {
        courseStudentRelations(condition: CourseStudentConditionType, limit: Int, offset: Int): CourseStudentConnection!
        courseStudentRelationById: CourseStudent!
    }

    extend type Mutation {
        courseStudentRelationCreate(input: CourseStudentInputType!): CourseStudent
		courseStudentRelationUpdate(id: ID!, input: CourseStudentInputType!): CourseStudent
        courseStudentRelationDelete(id: ID!): CourseStudent
    }

    input CourseStudentConditionType {
        course: ID
		student: ID
    }

    input CourseStudentInputType {
        course: ID
        student: ID
        enterDate: Date
        leaveDate: Date
    }

    type CourseStudentConnection {
        nodes: [CourseStudent]
    }
`;
