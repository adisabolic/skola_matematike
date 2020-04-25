import gql from 'graphql-tag';

export default gql`
    type Role {
        _id: ID!
        flag: Int!
        name: String!
    }

    extend type Query {
        roles: RolesConnection
        roleByFlag(flag: Int!): Role
    }

    extend type Mutation {
        roleCreate(input: RoleInputType!): Role
        roleDelete(flag: Int!): Role
    }

    input RoleInputType {
        flag: Int!
		name: String!
    }

    type RolesConnection {
        roles: [Role]
    }
`;
