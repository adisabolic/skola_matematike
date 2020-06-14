export default {
	Query: {
		homeworks: (_, args, { user, dataSources }) => {
			dataSources.UserAPI.adminMentorOnly(user);
			return dataSources.HomeworkAPI.getAllHomeworks(args);
		},
		homeworkById: (_, { id }, { user, dataSources }) => {
			dataSources.UserAPI.loggedIn(user);
			return dataSources.HomeworkAPI.getHomeworkById(id);
		},
		homeworksByCourse: (_, args, { user, dataSources }) => {
			dataSources.UserAPI.loggedIn(user);
			return dataSources.HomeworkAPI.getHomeworksByCourse(args);
		},
	},
	Mutation: {
		homeworkCreate: (_, { input }, { user, dataSources }) => {
			dataSources.UserAPI.adminMentorOnly(user);
			return dataSources.HomeworkAPI.createHomework(input);
		}
,
		homeworkUpdate: (_, { id, input }, { user, dataSources }) => {
			dataSources.UserAPI.adminMentorOnly(user);
			return dataSources.HomeworkAPI.updateHomework(id, input);
		},
		homeworkDelete: (_, { id }, { user, dataSources }) => {
			dataSources.UserAPI.adminMentorOnly(user);
			return dataSources.HomeworkAPI.deleteHomework(id);
		},
	},
	Homework: {
		author: ({ author }, _, { user, dataSources }) => dataSources.UserAPI.loadUserById.load(author),
		course: ({ course }, _, { user, dataSources }) => dataSources.CourseAPI.loadCourseById.load(course),
	}
};
