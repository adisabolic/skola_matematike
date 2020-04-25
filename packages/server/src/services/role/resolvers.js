export default {
	Query: {
		roles: (_, args, { user, dataSources }) => {
			dataSources.UserAPI.adminOnly(user);
			return dataSources.RoleAPI.getAllRoles();
		},
		roleByFlag: (_, { flag }, { user, dataSources }) => {
			dataSources.UserAPI.adminOnly(user);
			return dataSources.RoleAPI.getRoleByFlag(flag);
		},
	},
	Mutation: {
		roleCreate: (_, { input }, { user, dataSources }) => {
			dataSources.UserAPI.adminOnly(user);
			return dataSources.RoleAPI.createRole(input);
		},
		roleDelete: (_, { flag }, { user, dataSources }) => {
			dataSources.UserAPI.adminOnly(user);
			return dataSources.RoleAPI.deleteRole(flag);
		},
	}
};
