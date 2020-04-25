export default {
	Query: {
		schoolYears: (_, args, { user, dataSources }) => {
			dataSources.UserAPI.adminOnly(user);
			return dataSources.SchoolYearAPI.getAllSchoolYears();
		},
        schoolYearById: (_, { id }, { user, dataSources }) => {
			dataSources.UserAPI.adminOnly(user);
			return dataSources.SchoolYearAPI.getSchoolYearById(id);
		},
        schoolYearByName: (_, { name }, { user, dataSources }) => {
			dataSources.UserAPI.adminOnly(user);
			return dataSources.SchoolYearAPI.getSchoolYearByName(name);
		},
		activeSchoolYear: (_, __, { user, dataSources }) => {
			dataSources.UserAPI.adminOnly(user);
			return dataSources.SchoolYearAPI.getActiveSchoolYear();
		},
	},
	Mutation: {
		schoolYearCreate: (_, { input }, { user, dataSources }) => {
			dataSources.UserAPI.adminOnly(user);
			return dataSources.SchoolYearAPI.createSchoolYear(input);
		},
		schoolYearActivate: (_, { id }, { user, dataSources }) => {
			dataSources.UserAPI.adminOnly(user);
			return dataSources.SchoolYearAPI.activateSchoolYear(id);
		},
		schoolYearArchiveAll: (_, __, { user, dataSources }) => {
			dataSources.UserAPI.adminOnly(user);
			return dataSources.SchoolYearAPI.archiveAllSchoolYears();
		},
        schoolYearDelete: (_, { id }, { user, dataSources }) => {
			dataSources.UserAPI.adminOnly(user);
			return dataSources.SchoolYearAPI.deleteSchoolYear(id);
		},
	}
};
