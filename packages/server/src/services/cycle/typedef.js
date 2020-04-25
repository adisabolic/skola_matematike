import gql from 'graphql-tag';

export default gql`
    type Cycle {
        _id: ID!
        year: SchoolYear!
        ordinalNumber: Int!
    }

    extend type Query {
        cycles(condition: CycleConditionType, limit: Int, offset: Int, sortBy: String): CyclesConnection
        cyclesByYear(year: ID!): CyclesConnection
		cycleById(id: ID!): Cycle
    }

    extend type Mutation {
        cycleCreate(input: CycleInputType!): Cycle
		cycleUpdate(id: ID!, input: CycleInputType!): Cycle
        cycleDelete(id: ID!): Cycle
    }

    input CycleConditionType {
        year: ID
    }

    input CycleInputType {
        year: ID
        ordinalNumber: Int
    }

    type CyclesConnection {
        nodes: [Cycle]
    }
`;
