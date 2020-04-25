import { merge } from 'lodash';
import { makeExecutableSchema, gql } from 'apollo-server';
import { GraphQLDate, GraphQLTime, GraphQLDateTime } from 'graphql-iso-date';
import * as services from './services';

// GraphQL specification does not have a predefined Date type
// so we are using custom scalars from graphql-iso-date package
const scalarResolvers = {
  Date: GraphQLDate,
  Time: GraphQLTime,
  DateTime: GraphQLDateTime,
};

const Query = gql`
  scalar Date
  scalar Time
  scalar DateTime

  type Query {
    _empty: String
  }
`;

const Mutation = gql`
  type Mutation {
    _empty: String
  }
`;

const resolvers = {};

// Individual type definitions and resolvers are stitched together here.
// This is one way of achieving a modular schema (as opposed to putting it all in a single file), but
// there are alternatives (see Apollo Federation/Apollo Gateway).
export default makeExecutableSchema({
  typeDefs:
    [Query,
       Mutation,
       services.userTypeDef,
       services.roleTypeDef,
       services.courseTypeDef,
       services.schoolYearTypeDef,
       services.courseStudentTypeDef,
       services.cycleTypeDef,
       services.lectureTypeDef,
       services.testTypeDef,
       services.resultTypeDef,
       services.notificationTypeDef,
       services.homeworkTypeDef,
       services.homeworkCommentTypeDef,
       services.hourCountTypeDef,
       services.hourPriceTypeDef,
       services.studentPaymentTypeDef,
       services.mentorPaymentTypeDef,
    ],
  resolvers: merge(
    resolvers,
    scalarResolvers,
    services.userResolvers,
    services.roleResolvers,
    services.courseResolvers,
    services.schoolYearResolvers,
    services.courseStudentResolvers,
    services.cycleResolvers,
    services.lectureResolvers,
    services.testResolvers,
    services.resultResolvers,
    services.notificationResolvers,
    services.homeworkResolvers,
    services.homeworkCommentResolvers,
    services.hourCountResolvers,
    services.hourPriceResolvers,
    services.studentPaymentResolvers,
    services.mentorPaymentResolvers,
  ),
});
