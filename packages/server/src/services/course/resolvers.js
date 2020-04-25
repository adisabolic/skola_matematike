export default {
	Query: {
		courses: (parent, args, { user, dataSources }) => {
			dataSources.UserAPI.adminOnly(user);
			return dataSources.CourseAPI.getAllCourses(args);
		},
		currentCourses: (parent, args, { user, dataSources }) => {
			dataSources.UserAPI.loggedIn(user);
			return dataSources.CourseAPI.getCurrentCourses();
		},
		coursesByYear: (parent, { year }, { user, dataSources }) => {
			dataSources.UserAPI.adminOnly(user);
			return dataSources.CourseAPI.getCoursesByYear(year);
		},
		courseById: (_, { id }, { user, dataSources }) => {
			dataSources.UserAPI.adminOnly(user);
			return dataSources.CourseAPI.getCourseById(id);
		},
	},
	Mutation: {
		courseCreate: (_, { input }, { user, dataSources }) => {
			dataSources.UserAPI.adminOnly(user);
			return dataSources.CourseAPI.createCourse(input);
		},
		courseUpdate: (_, { id, input }, { user, dataSources }) => {
			dataSources.UserAPI.adminOnly(user);
			return dataSources.CourseAPI.updateCourse(id, input);
		},
		courseDelete: (_, { id }, { user, dataSources }) => {
			dataSources.UserAPI.adminOnly(user);
			return dataSources.CourseAPI.deleteCourse(id);
		},
	},
	Course: {
		year: ({ year }, _, { user, dataSources }) => dataSources.SchoolYearAPI.getSchoolYearById(year)
	}
};
