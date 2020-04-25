export default {
	Query: {
		lectures: (_, args, { user, dataSources }) => {
			dataSources.UserAPI.adminOnly(user);
			return dataSources.LectureAPI.getAllLectures(args);
		},
		lectureById: (_, { id }, { user, dataSources }) => {
			dataSources.UserAPI.adminMentorOnly(user);
			return dataSources.LectureAPI.getLectureById(id);
		},
		lecturesByCourse: (_, args, { user, dataSources }) => {
			dataSources.UserAPI.adminMentorOnly(user);
			return dataSources.LectureAPI.getLecturesByCourse(args);
		},
	},
	Mutation: {
		lectureCreate: (_, { input }, { user, dataSources }) => {
			dataSources.UserAPI.adminMentorOnly(user);
			return dataSources.LectureAPI.createLecture(input);
		}
,
		lectureUpdate: (_, { id, input }, { user, dataSources }) => {
			dataSources.UserAPI.adminMentorOnly(user);
			return dataSources.LectureAPI.updateLecture(id, input);
		},
		lectureDelete: (_, { id }, { user, dataSources }) => {
			dataSources.UserAPI.adminMentorOnly(user);
			return dataSources.LectureAPI.deleteLecture(id);
		},
	},
	Lecture: {
		mentor: ({ mentor }, _, { user, dataSources }) => dataSources.UserAPI.loadUserById.load(mentor),
		course: ({ course }, _, { user, dataSources }) => dataSources.CourseAPI.loadCourseById.load(course),
		cycle: ({ cycle }, _, { user, dataSources }) => dataSources.CycleAPI.loadCycleById.load(cycle),
	}
};
