import gql from 'graphql-tag';

export default gql`
    type Course {
        _id: ID!
        name: String!
        year: SchoolYear!
        archived: Boolean
    }

    extend type Query {
        courses(condition: CourseConditionType, limit: Int, offset: Int, sortBy: String): CoursesConnection
        currentCourses: CoursesConnection
        coursesByYear(year: ID!): CoursesConnection
        courseById(id: ID!): Course
    }

    extend type Mutation {
        courseCreate(input: CourseInputType!): Course
		courseUpdate(id: ID!, input: CourseInputType!): Course
        courseDelete(id: ID!): Course
    }

    input CourseConditionType{
        name: String,
        year: ID,
        archived: Boolean
    }

    input CourseInputType {
        name: String
        year: ID
        archived: Boolean
    }

    type CoursesConnection {
        nodes: [Course]
    }
`;
