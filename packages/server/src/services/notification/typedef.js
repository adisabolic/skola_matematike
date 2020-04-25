import gql from 'graphql-tag';

export default gql`
    type Notification {
        _id: ID!
		author: User!
		text: String!
		createdAt: DateTime!
		updatedAt: DateTime!
    }

    extend type Query {
        notifications(condition: NotificationConditionType, limit: Int, offset: Int, sortBy: String): NotificationsConnection!
		notificationById(id: ID!): Notification!
    }

    extend type Mutation {
        notificationCreate(input: NotificationInputType!): Notification!
		notificationUpdate(id: ID!, input: NotificationUpdateInputType!): Notification!
        notificationDelete(id: ID!): Notification!
    }

    input NotificationConditionType {
        author: ID
		text: String
    }

    input NotificationInputType {
        author: ID!
		text: String!
    }

    input NotificationUpdateInputType {
      	text: String
    }

    type NotificationsConnection {
        nodes: [Notification]!
    }
`;
