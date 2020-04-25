export const StudentPayment = require("../../models/humanResourceManagement/studentPayment.js");

export const getAllStudentPayments = async ({ condition, limit = Number.MAX_SAFE_INTEGER, offset = 0, sortBy = '-createdAt' }) => {
	const studentPayments = await StudentPayment.find(condition).sort(sortBy).skip(offset).limit(limit);
	return { nodes: studentPayments };
};

export const getStudentPaymentsByStudent = async (student) => {
	const studentPayments = await StudentPayment.find({ student: student });
	return { nodes: studentPayments };
};

export const getStudentPaymentById = async (id) => {
	const studentPayment = await StudentPayment.findById(id);
	return studentPayment;
};

export const createStudentPayment = async (input) => {
	const studentPayment = await StudentPayment.create(input);

	if(!studentPayment){
		throw Error("Error creating a studentPayment");
	}
	return studentPayment;
};

export const updateStudentPayment = async (id, input) => {
	const studentPayment = await StudentPayment.findByIdAndUpdate(id, { '$set': input });
	return studentPayment;
};

export const deleteStudentPayment = async (id) => {
    const studentPayment = await StudentPayment.findById(id);
	const deleted = await StudentPayment.findByIdAndDelete(id);

	if(!deleted)
		throw Error("Error deleting a studentPayment!");

	return studentPayment;
};
