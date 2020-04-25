import gql from 'graphql-tag';

export default gql`
    type MentorPayment {
        _id: ID!
		mentor: User!
		cycle: Cycle!
		paymentAmount: Float!
		paidTo: User
        createdAt: DateTime
        updatedAt: DateTime
    }

    extend type Query {
        mentorPayments(condition: MentorPaymentConditionType, limit: Int, offset: Int, sortBy: String): MentorPaymentsConnection!
        mentorPaymentsByMentor(mentor: ID!): MentorPaymentsConnection!
		mentorPaymentById(id: ID!): MentorPayment!
    }

    extend type Mutation {
        mentorPaymentCreate(input: MentorPaymentInputType!): MentorPayment!
		mentorPaymentUpdate(id: ID!, input: MentorPaymentUpdateInputType!): MentorPayment!
        mentorPaymentDelete(id: ID!): MentorPayment!
    }

    input MentorPaymentConditionType {
		mentor: ID
		cycle: ID
		paidTo: ID
    }

    input MentorPaymentInputType {
		mentor: ID!
		cycle: ID!
		paymentAmount: Float!
		paidTo: ID
    }

    input MentorPaymentUpdateInputType {
		cycle: ID
		paymentAmount: Float
		paidTo: ID
    }

    type MentorPaymentsConnection {
        nodes: [MentorPayment]!
    }
`;
