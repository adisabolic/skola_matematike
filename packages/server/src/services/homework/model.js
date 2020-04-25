export const Homework = require("../../models/contentManagement/homework.js");

import DataLoader from 'dataloader';

export const getAllHomeworks = async ({ condition, limit = Number.MAX_SAFE_INTEGER, offset = 0, sortBy = '-createdAt' }) => {
	const homeworks = await Homework.find(condition).sort(sortBy).skip(offset).limit(limit);
	return { nodes: homeworks };
};

export const getHomeworksByCourse = async ({ course, limit = Number.MAX_SAFE_INTEGER, offset = 0, sortBy = '-createdAt' }) => {
	const homeworks = await Homework.find({ course: course }).sort(sortBy).skip(offset).limit(limit);
	return { nodes: homeworks };
};

export const getHomeworkById = async (id) => {
	const homework = await Homework.findById(id);
	return homework;
};

export const createHomework = async (input) => {
	const homework = await Homework.create(input);

	if(!homework){
		throw Error("Error creating a homework");
	}
	return homework;
};

export const updateHomework = async (id, input) => {
	const homework = await Homework.findByIdAndUpdate(id, { '$set': input });
	return homework;
};

export const deleteHomework = async (id) => {
    const homework = await Homework.findById(id);
	const deleted = await Homework.findByIdAndDelete(id);

	if(!deleted)
		throw Error("Error deleting a homework!");

	return homework;
};

export const loadHomeworkById = new DataLoader(async (keys) => {
    const rows = await Homework.find({ "_id": { $in: keys } });
    return keys.map((key) => rows.find(({_id}) => _id.equals(key)));
});
