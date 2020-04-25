import gql from 'graphql-tag';

export default gql`
    type StudentPayment {
        _id: ID!
		student: User!
		cycle: Cycle!
		paymentAmount: Float!
        createdAt: DateTime
        updatedAt: DateTime
    }

    extend type Query {
        studentPayments(condition: StudentPaymentConditionType, limit: Int, offset: Int, sortBy: String): StudentPaymentsConnection!
        studentPaymentsByStudent(student: ID!): StudentPaymentsConnection!
		studentPaymentById(id: ID!): StudentPayment!
    }

    extend type Mutation {
        studentPaymentCreate(input: StudentPaymentInputType!): StudentPayment!
		studentPaymentUpdate(id: ID!, input: StudentPaymentUpdateInputType!): StudentPayment!
        studentPaymentDelete(id: ID!): StudentPayment!
    }

    input StudentPaymentConditionType {
		student: ID
		cycle: ID
    }

    input StudentPaymentInputType {
		student: ID!
		cycle: ID!
		paymentAmount: Float!
    }

    input StudentPaymentUpdateInputType {
		cycle: ID
		paymentAmount: Float
    }

    type StudentPaymentsConnection {
        nodes: [StudentPayment]!
    }
`;
