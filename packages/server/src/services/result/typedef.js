import gql from 'graphql-tag';

export default gql`
    type Result {
        _id: ID!
		test: Test!
        student: User!
		discount: Int
		score: Int
    }

    extend type Query {
        results(condition: ResultConditionType, limit: Int, offset: Int, sortBy: String): ResultsConnection!
		resultById(id: ID!): Result!
        resultsByTest(test: ID!, limit: Int, offset: Int, sortBy: String): ResultsConnection!
    }

    extend type Mutation {
        resultCreate(input: ResultInputType!): Result
		resultUpdate(id: ID!, input: ResultUpdateInputType!): Result
        resultDelete(id: ID!): Result
    }

    input ResultConditionType {
        test: ID
        student: ID
		discount: Int
		score: Int
    }

    input ResultInputType {
        test: ID!
        student: ID!
		discount: Int
		score: Int
    }

    input ResultUpdateInputType {
       test: ID
 	   student: ID
 	   discount: Int
 	   score: Int
    }

    type ResultsConnection {
        nodes: [Result]
    }
`;
