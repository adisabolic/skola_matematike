import DataLoader from 'dataloader';

export const Course = require("../../models/schoolManagement/course.js");

export const getAllCourses = async ({ condition, limit = Number.MAX_SAFE_INTEGER, offset = 0, sortBy = 'name' }) => {
	const courses = await Course.find(condition).sort(sortBy).skip(offset).limit(limit);

	return { nodes: courses };
};

export const getCurrentCourses = async () => {
	const courses = await Course.find({ archived: false });
	return { nodes: courses };
};

export const getCoursesByYear = async (year) => {
	const courses = await Course.find({ year: year });
	return { nodes: courses };
}

export const getCourseById =  async (id) => {
    const course = await Course.findById(id);
    return course;
}

export const createCourse = async (input) => {
	const course = await Course.create(input);

	if(!course){
		throw Error("Error creating a course");
	}
	return course;
};

export const updateCourse = async (id, input) => {
	const course = await Course.findByIdAndUpdate(id, { '$set': input });
	return course;
};

export const deleteCourse = async (id) => {
    const course = await Course.findById(id);
	const deleted = await Course.findByIdAndDelete(id);

	if(!deleted)
		throw Error("Error deleting a course!");

	return course;
};

export const loadCourseById = new DataLoader(async (keys) => {
    const rows = await Course.find({ "_id": { $in: keys } });
    return keys.map((key) => rows.find(({_id}) => _id.equals(key)));
});
