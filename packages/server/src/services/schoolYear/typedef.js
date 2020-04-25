import gql from 'graphql-tag';

export default gql`
    type SchoolYear {
        _id: ID!
        name: String!
        startYear: String
		active: Boolean
    }

    extend type Query {
        schoolYears: SchoolYearConnection
        schoolYearById(id: ID!): SchoolYear
        schoolYearByName(name: String!): SchoolYear
		activeSchoolYear: SchoolYear
    }

    extend type Mutation {
        schoolYearCreate(input: SchoolYearInputType!): SchoolYear
		schoolYearActivate(id: ID!): SchoolYear
		schoolYearArchiveAll: Boolean
        schoolYearDelete(id: ID!): SchoolYear
    }

    input SchoolYearInputType {
        name: String!
        startYear: Int
		active: Boolean
    }

    type SchoolYearConnection {
        nodes: [SchoolYear]
    }
`;
