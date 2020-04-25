export const Test = require("../../models/learningManagement/test.js");

import DataLoader from 'dataloader';

export const getAllTests = async ({ condition, limit = Number.MAX_SAFE_INTEGER, offset = 0, sortBy = '-date' }) => {
	const tests = await Test.find(condition).sort(sortBy).skip(offset).limit(limit);
	return { nodes: tests };
};

export const getTestsByCourse = async ({ course, limit = Number.MAX_SAFE_INTEGER, offset = 0, sortBy = '-createdAt'}) => {
	const tests = await Test.find({ course: course }).sort(sortBy).skip(offset).limit(limit);
	return { nodes: tests };
};

export const getTestById = async (id) => {
	const test = await Test.findById(id);
	return test;
};

export const createTest = async (input) => {
	const test = await Test.create(input);

	if(!test){
		throw Error("Error creating a test");
	}
	return test;
};

export const updateTest = async (id, input) => {
	const test = await Test.findByIdAndUpdate(id, { '$set': input });
	return test;
};

export const deleteTest = async (id) => {
    const test = await Test.findById(id);
	const deleted = await Test.findByIdAndDelete(id);

	if(!deleted)
		throw Error("Error deleting a test!");

	return test;
};

export const loadTestById = new DataLoader(async (keys) => {
    const rows = await Test.find({ "_id": { $in: keys } });
    return keys.map((key) => rows.find(({_id}) => _id.equals(key)));
});
