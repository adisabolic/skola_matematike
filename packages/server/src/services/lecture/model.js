export const Lecture = require("../../models/learningManagement/lecture.js");

export const getAllLectures = async ({ condition, limit = Number.MAX_SAFE_INTEGER, offset = 0, sortBy = '-date' }) => {
	const lectures = await Lecture.find(condition).sort(sortBy).skip(offset).limit(limit);
	return { nodes: lectures };
};

export const getLectureById = async (id) => {
	const lecture = await Lecture.findById(id);
	return lecture;
};

export const getLecturesByCourse = async ({ course, limit = 20, offset = 0, sortBy = '-date' }) => {
	const lectures = await Lecture.find({ course: course }).sort(sortBy).skip(offset).limit(limit);
	return { nodes: lectures };
};

export const createLecture = async (input) => {
	const lecture = await Lecture.create(input);

	if(!lecture){
		throw Error("Error creating a lecture");
	}
	return lecture;
};

export const updateLecture = async (id, input) => {
	const lecture = await Lecture.findByIdAndUpdate(id, { '$set': input });
	return lecture;
};

export const deleteLecture = async (id) => {
    const lecture = await Lecture.findById(id);
	const deleted = await Lecture.findByIdAndDelete(id);

	if(!deleted)
		throw Error("Error deleting a lecture!");

	return lecture;
};
