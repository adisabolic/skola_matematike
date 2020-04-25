import gql from 'graphql-tag';

export default gql`
    type Test {
        _id: ID!
		course: Course!
        mentor: User!
		cycle: Cycle
		maxScore: Int
		numberOfProblems: Int
		date: Date!
		fileProblems: String
        createdAt: DateTime
        modifiedAt: DateTime
    }

    extend type Query {
        tests(condition: TestConditionType, limit: Int, offset: Int, sortBy: String): TestsConnection
		testById(id: ID!): Test
        testsByCourse(course: ID!, limit: Int, offset: Int, sortBy: String ): TestsConnection
    }

    extend type Mutation {
        testCreate(input: TestInputType!): Test
		testUpdate(id: ID!, input: TestUpdateInputType!): Test
        testDelete(id: ID!): Test
    }

    input TestConditionType {
		course: ID
        mentor: ID
		cycle: ID
		maxScore: Int
		numberOfProblems: Int
		date: Date
    }

    input TestInputType {
		course: ID!
        mentor: ID!
		cycle: ID
		maxScore: Int
		numberOfProblems: Int
		date: Date!
		fileProblems: String
    }

    input TestUpdateInputType {
        course: ID
        mentor: ID
		cycle: ID
		maxScore: Int
		numberOfProblems: Int
		date: Date
		fileProblems: String
    }

    type TestsConnection {
        nodes: [Test]
    }
`;
