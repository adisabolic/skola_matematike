export default {
	Query: {
		notifications: (_, args, { user, dataSources }) => {
			dataSources.UserAPI.loggedIn(user);
			return dataSources.NotificationAPI.getAllNotifications(args);
		},
		notificationById: (_, { id }, { user, dataSources }) => {
			dataSources.UserAPI.loggedIn(user);
			return dataSources.NotificationAPI.getNotificationById(id);
		},
	},
	Mutation: {
		notificationCreate: (_, { input }, { user, dataSources }) => {
			dataSources.UserAPI.adminMentorOnly(user);
			return dataSources.NotificationAPI.createNotification(input);
		},
		notificationUpdate: (_, { id, input }, { user, dataSources }) => {
			dataSources.UserAPI.adminMentorOnly(user);
			return dataSources.NotificationAPI.updateNotification(id, input);
		},
		notificationDelete: (_, { id }, { user, dataSources }) => {
			dataSources.UserAPI.adminMentorOnly(user);
			return dataSources.NotificationAPI.deleteNotification(id);
		},
	},
	Notification: {
		author: ({ author }, _, { user, dataSources }) => dataSources.UserAPI.loadUserById.load(author),
	}
};
