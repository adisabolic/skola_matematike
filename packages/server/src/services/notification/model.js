export const Notification = require("../../models/contentManagement/notification.js");

export const getAllNotifications = async ({ condition, limit = Number.MAX_SAFE_INTEGER, offset = 0, sortBy = '-createdAt' }) => {
	const notifications = await Notification.find(condition).sort(sortBy).skip(offset).limit(limit);
	return { nodes: notifications };
};

export const getNotificationById = async (id) => {
	const notification = await Notification.findById(id);
	return notification;
};

export const createNotification = async (input) => {
	const notification = await Notification.create(input);

	if(!notification){
		throw Error("Error creating a notification");
	}
	return notification;
};

export const updateNotification = async (id, input) => {
	const notification = await Notification.findByIdAndUpdate(id, { '$set': input });
	return notification;
};

export const deleteNotification = async (id) => {
    const notification = await Notification.findById(id);
	const deleted = await Notification.findByIdAndDelete(id);

	if(!deleted)
		throw Error("Error deleting a notification!");

	return notification;
};
