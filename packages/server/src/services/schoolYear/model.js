export const SchoolYear = require("../../models/schoolManagement/schoolYear.js");

import DataLoader from 'dataloader';

export const getAllSchoolYears = async () => {
	const schoolYears = await SchoolYear.find({});
	return { nodes: schoolYears };
};

export const getSchoolYearByName = async (name) => {
	const schoolYear = await SchoolYear.findOne({ name: name });
	return schoolYear;
};

export const getSchoolYearById = async (id) => {
	const schoolYear = await SchoolYear.findById(id);
	return schoolYear;
};

export const getActiveSchoolYear = async () => {
	const schoolYear = await SchoolYear.findOne({ active: true });
	return schoolYear;
};

export const createSchoolYear = async (input) => {
	const schoolYear = await SchoolYear.create(input);

	if(!schoolYear){
		throw Error("Error creating a school year!");
	}
	return schoolYear;
};

export const activateSchoolYear = async (id) => {
	await SchoolYear.findByIdAndUpdate(id, { '$set': { active: true } });
	const schoolYear = SchoolYear.findById(id);
	return schoolYear;
};

export const archiveAllSchoolYears = async () => {
	const updated = await SchoolYear.updateMany({}, { '$set': { active: false } });

	if(updated)
		return true;
	return false;
};

export const deleteSchoolYear = async (id) => {
	const schoolYear = await SchoolYear.findById(id);
	const deleted = await SchoolYear.findByIdAndDelete(id);
	if(!deleted)
		throw Error("Error deleting a school year");
	return schoolYear
};

export const loadSchoolYearById = new DataLoader(async (keys) => {
    const rows = await SchoolYear.find({ "_id": { $in: keys } });
    return keys.map((key) => rows.find(({_id}) => _id.equals(key)));
});
