export const MentorPayment = require("../../models/humanResourceManagement/mentorPayment.js");

export const getAllMentorPayments = async ({ condition, limit = Number.MAX_SAFE_INTEGER, offset = 0, sortBy = '-createdAt' }) => {
	const mentorPayments = await MentorPayment.find(condition).sort(sortBy).skip(offset).limit(limit);
	return { nodes: mentorPayments };
};

export const getMentorPaymentsByMentor = async (mentor) => {
	const mentorPayments = await MentorPayment.find({ mentor: mentor });
	return { nodes: mentorPayments };
};

export const getMentorPaymentById = async (id) => {
	const mentorPayment = await MentorPayment.findById(id);
	return mentorPayment;
};

export const createMentorPayment = async (input) => {
	const mentorPayment = await MentorPayment.create(input);

	if(!mentorPayment){
		throw Error("Error creating a mentorPayment");
	}
	return mentorPayment;
};

export const updateMentorPayment = async (id, input) => {
	const mentorPayment = await MentorPayment.findByIdAndUpdate(id, { '$set': input });
	return mentorPayment;
};

export const deleteMentorPayment = async (id) => {
    const mentorPayment = await MentorPayment.findById(id);
	const deleted = await MentorPayment.findByIdAndDelete(id);

	if(!deleted)
		throw Error("Error deleting a mentorPayment!");

	return mentorPayment;
};
