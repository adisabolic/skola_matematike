export const HourPrice = require("../../models/humanResourceManagement/hourPrice.js");

export const getAllHourPrices = async () => {
	const hourPrices = await HourPrice.find({});
	return { nodes: hourPrices };
};

export const getHourPriceByCourse = async (course) => {
	const hourPrice = await HourPrice.findOne({ course: course });
	return hourPrice;
};

export const getHourPriceById = async (id) => {
	const hourPrice = await HourPrice.findById(id);
	return hourPrice;
};

export const createHourPrice = async (input) => {
	const hourPrice = await HourPrice.create(input);

	if(!hourPrice){
		throw Error("Error creating a hourPrice");
	}
	return hourPrice;
};

export const updateHourPrice = async (id, input) => {
	const hourPrice = await HourPrice.findByIdAndUpdate(id, { '$set': input });
	return hourPrice;
};

export const deleteHourPrice = async (id) => {
    const hourPrice = await HourPrice.findById(id);
	const deleted = await HourPrice.findByIdAndDelete(id);

	if(!deleted)
		throw Error("Error deleting a hourPrice!");

	return hourPrice;
};
