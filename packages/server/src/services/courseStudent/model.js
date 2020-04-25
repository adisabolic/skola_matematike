export const CourseStudent = require("../../models/schoolManagement/course.js");

export const getAllCourseStudentRelations = async ({ condition, limit = Number.MAX_SAFE_INTEGER, offset = 0 }) => {
	const relations = await CourseStudent.find(condition).skip(offset).limit(limit);
	return { nodes: relations };
};

export const getCourseStudentRelationById = async (id) => {
	const relation = await CourseStudent.findById(id);
	return relation;
};

export const createCourseStudentRelation = async (input) => {
	const relation = await CourseStudent.create(input);

	if(!relation){
		throw Error("Error creating a course student relatoin");
	}
	return relation;
};

export const updateCourseStudentRelation = async (id, input) => {
	const relation = await CourseStudent.findByIdAndUpdate(id, { '$set': input });
	return relation;
};

export const deleteCourseStudentRelation = async (id) => {
    const relation = await CourseStudent.findById(id);
	const deleted = await CourseStudent.findByIdAndDelete(id);

	if(!deleted)
		throw Error("Error deleting a course!");

	return course;
};
