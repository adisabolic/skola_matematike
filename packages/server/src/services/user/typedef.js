import gql from 'graphql-tag';

export default gql`
    type User {
        _id: ID!
        role: Role
        name: String!
        surname: String!
        email: String!
        course: Course
        active: Boolean
        member: Boolean
        phone: String
        class: String
        school: String
        entity: String
        city: String
        parentName: String
        parentPhone: String
        parentEmail: String
    }

    extend type Query {
        currentUser: User!
        users(condition: UserConditionType, limit: Int, offset: Int, sortBy: String): UserConnection!
        userById(id: ID!): User!
    }

    extend type Mutation {
        register(input: UserRegisterType!): User!
        login(email: String!, password: String!): LoginResponse!
        userUpdate(id: ID!, input: UserUpdateType): User!
        userDelete(id: ID!): User!
    }

    input UserConditionType {
        role: Int
        name: String
        surname: String
        email: String
        course: ID
        active: Boolean
        member: Boolean
        phone: String
        class: String
        school: String
        entity: String
        city: String
        parentName: String
        parentPhone: String
        parentEmail: String
    }

    input UserRegisterType {
        role: Int!
        name: String!
        surname: String!
        email: String!
        course: ID
        active: Boolean
        member: Boolean
        phone: String
        class: String
        school: String
        entity: String
        city: String
        parentName: String
        parentPhone: String
        parentEmail: String
        password: String!
    }

    input UserUpdateType {
        role: Int
        name: String
        surname: String
        email: String
        course: ID
        active: Boolean
        member: Boolean
        phone: String
        class: String
        school: String
        entity: String
        city: String
        parentName: String
        parentPhone: String
        parentEmail: String
    }

    type LoginResponse {
        token: String
        user: User
    }

    type UserConnection {
        nodes: [User]!
    }
`;
