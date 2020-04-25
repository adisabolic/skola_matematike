export default {
	Query: {
		homeworkComments: (_, args, { user, dataSources }) => {
			dataSources.UserAPI.adminOnly(user);
			return dataSources.HomeworkCommentAPI.getAllHomeworkComments(args);
		},
		homeworkCommentById: (_, { id }, { user, dataSources }) => {
			dataSources.UserAPI.adminMentorOnly(user);
			return dataSources.HomeworkCommentAPI.getHomeworkCommentById(id);
		},
		homeworkCommentsByHomework: (_, args, { user, dataSources }) => {
			dataSources.UserAPI.adminMentorOnly(user);
			return dataSources.HomeworkCommentAPI.getHomeworkCommentsByHomework(args);
		},
	},
	Mutation: {
		homeworkCommentCreate: (_, { input }, { user, dataSources }) => {
			dataSources.UserAPI.loggedIn(user);
			return dataSources.HomeworkCommentAPI.createHomeworkComment(input);
		},
		homeworkCommentUpdate: (_, { id, input }, { user, dataSources }) => {
			dataSources.UserAPI.loggedIn(user);
			return dataSources.HomeworkCommentAPI.updateHomeworkComment(id, input);
		},
		homeworkDelete: (_, { id }, { user, dataSources }) => {
			dataSources.UserAPI.loggedIn(user);
			return dataSources.HomeworkCommentAPI.deleteHomeworkComment(id);
		},
	},
	HomeworkComment: {
		author: ({ author }, _, { user, dataSources }) => dataSources.UserAPI.loadUserById.load(author),
		homework: ({ homework }, _, { user, dataSources }) => dataSources.HomeworkAPI.loadHomeworkById.load(homework),
	}
};
