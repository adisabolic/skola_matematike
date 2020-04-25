export default {
	Query: {
		cycles: (_, args, { user, dataSources }) => {
			dataSources.UserAPI.adminOnly(user);
			return dataSources.CycleAPI.getAllCycles(args);
		},
		cyclesByYear: (_, { year }, { user, dataSources }) => {
			dataSources.UserAPI.adminOnly(user);
			return dataSources.CycleAPI.getCyclesByYear(year);
		},
		cycleById: (_, { id }, { user, dataSources }) => {
			dataSources.UserAPI.adminOnly(user);
			return dataSources.CycleAPI.getCycleById(id);
		},
	},
	Mutation: {
		cycleCreate: (_, { input }, { user, dataSources }) => {
			dataSources.UserAPI.adminOnly(user);
			return dataSources.CycleAPI.createCycle(input);
		},
		cycleUpdate: (_, { id, input }, { user, dataSources }) => {
			dataSources.UserAPI.adminOnly(user);
			return dataSources.CycleAPI.updateCycle(id, input);
		},
		cycleDelete: (_, { id }, { user, dataSources }) => {
			dataSources.UserAPI.adminOnly(user);
			return dataSources.CycleAPI.deleteCycle(id);
		},
	},
	Cycle: {
		year: ({ year }, _, { user, dataSources }) => dataSources.SchoolYearAPI.loadSchoolYearById.load(year)
	}
};
