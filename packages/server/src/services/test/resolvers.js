export default {
	Query: {
		tests: (_, args, { user, dataSources }) => {
			dataSources.UserAPI.adminMentorOnly(user);
			return dataSources.TestAPI.getAllTests(args);
		},
		testById: (_, { id }, { user, dataSources }) => {
			dataSources.UserAPI.adminMentorOnly(user);
			return dataSources.TestAPI.getTestById(id);
		},
		testsByCourse: (_, args, { user, dataSources }) => {
			dataSources.UserAPI.adminMentorOnly(user);
			return dataSources.TestAPI.getTestsByCourse(args);
		},
	},
	Mutation: {
		testCreate: (_, { input }, { user, dataSources }) => {
			dataSources.UserAPI.adminMentorOnly(user);
			return dataSources.TestAPI.createTest(input);
		},
		testUpdate: (_, { id, input }, { user, dataSources }) => {
			dataSources.UserAPI.adminMentorOnly(user);
			return dataSources.TestAPI.updateTest(id, input);
		},
		testDelete: (_, { id }, { user, dataSources }) => {
			dataSources.UserAPI.adminMentorOnly(user);
			return dataSources.TestAPI.deleteTest(id);
		},
	},
	Test: {
		mentor: ({ mentor }, _, { user, dataSources }) => dataSources.UserAPI.loadUserById.load(mentor),
		course: ({ course }, _, { user, dataSources }) => dataSources.CourseAPI.loadCourseById.load(course),
		cycle: ({ cycle }, _, { user, dataSources }) => dataSources.CycleAPI.loadCycleById.load(cycle),
	}
};
