export const HourCount = require("../../models/humanResourceManagement/hourCount.js");

export const getAllHourCounts = async () => {
	const hourCounts = await HourCount.find({});
	return { nodes: hourCounts };
};

export const getHourCountById = async (id) => {
	const hourCount = await HourCount.findById(id);
	return hourCount;
};

export const createHourCount = async (input) => {
	const hourCount = await HourCount.create(input);

	if(!hourCount){
		throw Error("Error creating a hourCount");
	}
	return hourCount;
};

export const updateHourCount = async (id, input) => {
	const hourCount = await HourCount.findByIdAndUpdate(id, { '$set': input });
	return hourCount;
};

export const deleteHourCount = async (id) => {
    const hourCount = await HourCount.findById(id);
	const deleted = await HourCount.findByIdAndDelete(id);

	if(!deleted)
		throw Error("Error deleting a hourCount!");

	return hourCount;
};
