export default {
	Query: {
		mentorPayments: (_, args, { user, dataSources }) => {
			dataSources.UserAPI.adminOnly(user);
			return dataSources.MentorPaymentAPI.getAllMentorPayments(args);
		},
		mentorPaymentsByMentor: (_, { mentor }, { user, dataSources }) => {
			dataSources.UserAPI.adminOnly(user);
			return dataSources.MentorPaymentAPI.getMentorPaymentsByMentor(mentor);
		},
		mentorPaymentById: (_, { id }, { user, dataSources }) => {
			dataSources.UserAPI.adminOnly(user);
			return dataSources.MentorPaymentAPI.getMentorPaymentById(id);
		},
	},
	Mutation: {
		mentorPaymentCreate: (_, { input }, { user, dataSources }) => {
			dataSources.UserAPI.adminOnly(user);
			return dataSources.MentorPaymentAPI.createMentorPayment(input);
		},
		mentorPaymentUpdate: (_, { id, input }, { user, dataSources }) => {
			dataSources.UserAPI.adminOnly(user);
			return dataSources.MentorPaymentAPI.updateMentorPayment(id, input);
		},
		mentorPaymentDelete: (_, { id }, { user, dataSources }) => {
			dataSources.UserAPI.adminOnly(user);
			return dataSources.MentorPaymentAPI.deleteMentorPayment(id);
		},
	},
	MentorPayment: {
		mentor: ({ mentor }, _, { user, dataSources }) => dataSources.UserAPI.loadUserById.load(mentor),
		cycle: ({ cycle }, _, { user, dataSources }) => dataSources.CycleAPI.loadCycleById.load(cycle),
		paidTo: ({ paidTo }, _, { user, dataSources }) => (paidTo) ? dataSources.UserAPI.loadUserById.load(paidTo) : null,
	}
};
