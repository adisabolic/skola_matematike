export default {
	Query: {
		hourPrices: (_, __, { user, dataSources }) => {
			dataSources.UserAPI.adminOnly(user);
			return dataSources.HourPriceAPI.getAllHourPrices();
		},
		hourPriceByCourse: (_, { course }, { user, dataSources }) => {
			dataSources.UserAPI.adminOnly(user);
			return dataSources.HourPriceAPI.getHourPriceByCourse(course);
		},
		hourPriceById: (_, { id }, { user, dataSources }) => {
			dataSources.UserAPI.adminOnly(user);
			return dataSources.HourPriceAPI.getHourPriceById(id);
		},
	},
	Mutation: {
		hourPriceCreate: (_, { input }, { user, dataSources }) => {
			dataSources.UserAPI.adminOnly(user);
			return dataSources.HourPriceAPI.createHourPrice(input);
		},
		hourPriceUpdate: (_, { id, input }, { user, dataSources }) => {
			dataSources.UserAPI.adminOnly(user);
			return dataSources.HourPriceAPI.updateHourPrice(id, input);
		},
		hourPriceDelete: (_, { id }, { user, dataSources }) => {
			dataSources.UserAPI.adminOnly(user);
			return dataSources.HourPriceAPI.deleteHourPrice(id);
		},
	},
	HourPrice: {
		course: ({ course }, _, { user, dataSources }) => dataSources.CourseAPI.loadCourseById.load(course),
	}
};
