export default {
	Query: {
		currentUser: (parent, args, { user, dataSources }) => dataSources.UserAPI.currentUser(user),
		users: (_, args, { user, dataSources }) => {
			dataSources.UserAPI.adminOnly(user);
			return dataSources.UserAPI.getAllUsers(args);
		},
		userById: (_, { id }, { user, dataSources }) => dataSources.UserAPI.getUserById(id),
	},
	Mutation: {
		register: (_, { input }, { user, dataSources }) => {
			dataSources.UserAPI.adminOnly(user);
			return dataSources.UserAPI.register(input);
		},
		login: (_, input, { dataSources }) => dataSources.UserAPI.login(input),
		userUpdate: (_, { id, input }, { user, dataSources }) => {
			dataSources.UserAPI.adminOnly(user);
			return dataSources.UserAPI.updateUser(id, input);
		},
		userDelete: (_, { id }, { user, dataSources }) => {
			dataSources.UserAPI.adminOnly(user);
			return dataSources.UserAPI.deleteUser(id);
		},
	},
	User: {
		course: ({ course }, _, { dataSources, user }) => (course) ? dataSources.CourseAPI.loadCourseById.load(course) : null,
		role: ({ role }, _, { dataSources, user }) => dataSources.RoleAPI.loadRoleByFlag.load(role),
	}
};
