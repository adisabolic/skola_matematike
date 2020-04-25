import gql from 'graphql-tag';

export default gql`
    type Lecture {
        _id: ID!
        description: String!
        mentor: User
		course: Course
		cycle: Cycle
		week: Int
		date: Date!
    }

    extend type Query {
        lectures(condition: LectureConditionType, limit: Int, offset: Int, sortBy: String): LecturesConnection
		lectureById(id: ID!): Lecture
        lecturesByCourse(course: ID!, limit: Int, offset: Int, sortBy: String): LecturesConnection
    }

    extend type Mutation {
        lectureCreate(input: LectureInputType!): Lecture
		lectureUpdate(id: ID!, input: LectureInputType!): Lecture
        lectureDelete(id: ID!): Lecture
    }

    input LectureConditionType {
        description: String
        mentor: ID
        course: ID
        cycle: ID
        week: Int
        date: Date
    }

    input LectureInputType {
        description: String!
        mentor: ID
		course: ID
		cycle: ID
		week: Int
		date: Date!
    }

    type LecturesConnection {
        nodes: [Lecture]
    }
`;
