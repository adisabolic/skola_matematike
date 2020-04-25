export default {
	Query: {
		courseStudentRelations: (_, args, { user, dataSources }) => {
			dataSources.UserAPI.adminOnly(user);
			return dataSources.CourseStudentAPI.getAllCourseStudentRelations(args);
		},
		courseStudentRelationById: (_, { id }, { user, dataSources }) => {
			dataSources.UserAPI.adminOnly(user);
			return dataSources.CourseStudentAPI.getCourseStudentRelationById(id);
		},
	},
	Mutation: {
		courseStudentRelationCreate: (_, { input }, { user, dataSources }) => {
			dataSources.UserAPI.adminOnly(user);
			return dataSources.CourseAPI.createCourseStudentRelation(input);
		},
		courseStudentRelationUpdate: (_, { id, input }, { user, dataSources }) => {
			dataSources.UserAPI.adminOnly(user);
			return dataSources.CourseAPI.updateCourseStudentRelation(id, input);
		},
		courseStudentRelationDelete: (_, { id }, { user, dataSources }) => {
			dataSources.UserAPI.adminOnly(user);
			return dataSources.CourseAPI.deleteCourseStudentRelation(id);
		},
	},
	CourseStudent: {
		course: ({ course }, _, { user, dataSources }) => dataSources.CourseAPI.getCourseById(course),
		student: ({ student }, _, { user, dataSources }) => dataSources.UserAPI.getUserById(student),
	}
};
