export const Cycle = require("../../models/schoolManagement/cycle.js");

import DataLoader from 'dataloader';

export const getAllCycles = async ({ condition, limit = Number.MAX_SAFE_INTEGER, offset = 0, sortBy = 'ordinalNumber' }) => {
	const cycles = await Cycle.find(condition).sort(sortBy).skip(offset).limit(limit);
	return { nodes: cycles };
};

export const getCyclesByYear = async (year) => {
	const cycles = await Cycle.find({});
	return { nodes: cycles };
};

export const getCycleById = async (id) => {
	const cycle = await Cycle.findById(id);
	return cycle;
};

export const createCycle = async (input) => {
	const cycle = await Cycle.create(input);

	if(!cycle){
		throw Error("Error creating a cycle");
	}
	return cycle;
};

export const updateCycle = async (id, input) => {
	const cycle = await Cycle.findByIdAndUpdate(id, { '$set': input });
	return cycle;
};

export const deleteCycle = async (id) => {
    const cycle = await Cycle.findById(id);
	const deleted = await Cycle.findByIdAndDelete(id);

	if(!deleted)
		throw Error("Error deleting a cycle!");

	return cycle;
};

export const loadCycleById = new DataLoader(async (keys) => {
    const rows = await Cycle.find({ "_id": { $in: keys } });
    return keys.map((key) => rows.find(({_id}) => _id.equals(key)));
});
