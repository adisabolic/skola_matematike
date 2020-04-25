export const Result = require("../../models/learningManagement/result.js");

export const getAllResults = async ({ condition, limit = Number.MAX_SAFE_INTEGER, offset = 0, sortBy = '-score' }) => {
	const results = await Result.find(condition).sort(sortBy).skip(offset).limit(limit);
	return { nodes: results };
};

export const getResultsByTest = async ({ test, limit = Number.MAX_SAFE_INTEGER, offset = 0, sortBy = '-score'}) => {
	const results = await Result.find({ test: test }).sort(sortBy).skip(offset).limit(limit);
	return { nodes: results };
};

export const getResultById = async (id) => {
	const result = await Result.findById(id);
	return result;
};

export const createResult = async (input) => {
	const result = await Result.create(input);

	if(!result){
		throw Error("Error creating a result");
	}
	return result;
};

export const updateResult = async (id, input) => {
	const result = await Result.findByIdAndUpdate(id, { '$set': input });
	return result;
};

export const deleteResult = async (id) => {
    const result = await Result.findById(id);
	const deleted = await Result.findByIdAndDelete(id);

	if(!deleted)
		throw Error("Error deleting a result!");

	return result;
};
