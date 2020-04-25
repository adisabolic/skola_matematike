export default {
	Query: {
		studentPayments: (_, args, { user, dataSources }) => {
			dataSources.UserAPI.adminOnly(user);
			return dataSources.StudentPaymentAPI.getAllStudentPayments(args);
		},
		studentPaymentsByStudent: (_, { student }, { user, dataSources }) => {
			dataSources.UserAPI.adminOnly(user);
			return dataSources.StudentPaymentAPI.getStudentPaymentsByStudent(student);
		},
		studentPaymentById: (_, { id }, { user, dataSources }) => {
			dataSources.UserAPI.adminOnly(user);
			return dataSources.StudentPaymentAPI.getStudentPaymentById(id);
		},
	},
	Mutation: {
		studentPaymentCreate: (_, { input }, { user, dataSources }) => {
			dataSources.UserAPI.adminOnly(user);
			return dataSources.StudentPaymentAPI.createStudentPayment(input);
		},
		studentPaymentUpdate: (_, { id, input }, { user, dataSources }) => {
			dataSources.UserAPI.adminOnly(user);
			return dataSources.StudentPaymentAPI.updateStudentPayment(id, input);
		},
		studentPaymentDelete: (_, { id }, { user, dataSources }) => {
			dataSources.UserAPI.adminOnly(user);
			return dataSources.StudentPaymentAPI.deleteStudentPayment(id);
		},
	},
	StudentPayment: {
		student: ({ student }, _, { user, dataSources }) => dataSources.UserAPI.loadUserById.load(student),
		cycle: ({ cycle }, _, { user, dataSources }) => dataSources.CycleAPI.loadCycleById.load(cycle),
	}
};
