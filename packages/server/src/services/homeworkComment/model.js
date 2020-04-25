export const HomeworkComment = require("../../models/contentManagement/homeworkComment.js");

export const getAllHomeworkComments = async ({ condition, limit = Number.MAX_SAFE_INTEGER, offset = 0, sortBy = '-createdAt' }) => {
	const homeworkComments = await HomeworkComment.find(condition).sort(sortBy).skip(offset).limit(limit);
	return { nodes: homeworkComments };
};

export const getHomeworkCommentsByHomework = async ({ homework, limit = Number.MAX_SAFE_INTEGER, offset = 0, sortBy = 'createdAt'}) => {
	const homeworkComments = await HomeworkComment.find({ homework: homework }).sort(sortBy).skip(offset).limit(limit);
	return { nodes: homeworkComments };
};

export const getHomeworkCommentById = async (id) => {
	const homeworkComment = await HomeworkComment.findById(id);
	return homeworkComment;
};

export const createHomeworkComment = async (input) => {
	const homeworkComment = await HomeworkComment.create(input);

	if(!homeworkComment){
		throw Error("Error creating a homeworkComment");
	}
	return homeworkComment;
};

export const updateHomeworkComment = async (id, input) => {
	const homeworkComment = await HomeworkComment.findByIdAndUpdate(id, { '$set': input });
	return homeworkComment;
};

export const deleteHomeworkComment = async (id) => {
    const homeworkComment = await HomeworkComment.findById(id);
	const deleted = await Homework.findByIdAndDelete(id);

	if(!deleted)
		throw Error("Error deleting a homeworkComment!");

	return homeworkComment;
};
