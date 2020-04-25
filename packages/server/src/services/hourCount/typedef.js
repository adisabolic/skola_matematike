import gql from 'graphql-tag';

export default gql`
    type HourCount {
        _id: ID!
		type: String!
		count: Int!
    }

    extend type Query {
        hourCounts: HourCountsConnection!
		hourCountById(id: ID!): HourCount!
    }

    extend type Mutation {
        hourCountCreate(input: HourCountInputType!): HourCount!
		hourCountUpdate(id: ID!, input: HourCountUpdateInputType!): HourCount!
        hourCountDelete(id: ID!): HourCount!
    }

    input HourCountInputType {
		type: String!
		count: Int!
    }

    input HourCountUpdateInputType {
		count: Int
    }

    type HourCountsConnection {
        nodes: [HourCount]!
    }
`;
