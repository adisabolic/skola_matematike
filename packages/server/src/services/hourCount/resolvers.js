export default {
	Query: {
		hourCounts: (_, __, { user, dataSources }) =>{
			dataSources.UserAPI.adminOnly(user);
			return dataSources.HourCountAPI.getAllHourCounts();
		},
		hourCountById: (_, { id }, { user, dataSources }) => {
			dataSources.UserAPI.adminOnly(user);
			return dataSources.HourCountAPI.getHourCountById(id);
		},
	},
	Mutation: {
		hourCountCreate: (_, { input }, { user, dataSources }) => {
			dataSources.UserAPI.adminOnly(user);
			return dataSources.HourCountAPI.createHourCount(input);
		},
		hourCountUpdate: (_, { id, input }, { user, dataSources }) => {
			dataSources.UserAPI.adminOnly(user);
			return dataSources.HourCountAPI.updateHourCount(id, input);
		},
		hourCountDelete: (_, { id }, { user, dataSources }) => {
			dataSources.UserAPI.adminOnly(user);
			return dataSources.HourCountAPI.deleteHourCount(id);
		},
	},
};
