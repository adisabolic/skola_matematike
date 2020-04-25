export default {
	Query: {
		results: (_, args, { user, dataSources }) => {
			dataSources.UserAPI.adminMentorOnly(user);
			return dataSources.ResultAPI.getAllResults(args);
		},
		resultById: (_, { id }, { user, dataSources }) => {
			dataSources.UserAPI.adminMentorOnly(user);
			return dataSources.ResultAPI.getResultById(id);
		},
		resultsByTest: (_, args, { user, dataSources }) => {
			dataSources.UserAPI.adminMentorOnly(user);
			return dataSources.ResultAPI.getResultsByTest(args);
		},
	},
	Mutation: {
		resultCreate: (_, { input }, { user, dataSources }) => {
			dataSources.UserAPI.adminMentorOnly(user);
			return dataSources.ResultAPI.createResult(input);
		},
		resultUpdate: (_, { id, input }, { user, dataSources }) => {
			dataSources.UserAPI.adminMentorOnly(user);
			return dataSources.ResultAPI.updateResult(id, input);
		},
		resultDelete: (_, { id }, { user, dataSources }) => {
			dataSources.UserAPI.adminMentorOnly(user);
			return dataSources.ResultAPI.deleteResult(id);
		},
	},
	Result: {
		test: ({ test }, _, { user, dataSources }) => dataSources.TestAPI.loadTestById.load(test),
		student: ({ student }, _, { user, dataSources }) => dataSources.UserAPI.loadUserById.load(student),
	}
};
