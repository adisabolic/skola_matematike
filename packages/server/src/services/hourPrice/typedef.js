import gql from 'graphql-tag';

export default gql`
    type HourPrice {
        _id: ID!
        course: Course!
		price: Int!
    }

    extend type Query {
        hourPrices: HourPricesConnection!
        hourPriceByCourse(course: ID!): HourPrice!
		hourPriceById(id: ID!): HourPrice!
    }

    extend type Mutation {
        hourPriceCreate(input: HourPriceInputType!): HourPrice!
		hourPriceUpdate(id: ID!, input: HourPriceUpdateInputType!): HourPrice!
        hourPriceDelete(id: ID!): HourPrice!
    }

    input HourPriceInputType {
        course: ID!
		price: Int!
    }

    input HourPriceUpdateInputType {
		price: Int
    }

    type HourPricesConnection {
        nodes: [HourPrice]!
    }
`;
