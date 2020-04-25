import DataLoader from 'dataloader';

export const Role = require("../../models/userManagement/role.js");

export const getAllRoles = async () => {
	const roles = await Role.find({});

	return { roles };
};

export const getRoleByFlag =  async (flag) => {
    const role = await Role.findOne({ flag: flag });
    return role;
}

export const createRole = async (input) => {
	const role = await Role.create(input);

	if(!role){
		throw Error("Error creating a role");
	}
	return role;
};

export const deleteRole = async (flag) => {
    const role = await Role.findOne({ flag: flag });
	const r = await Role.deleteOne({ flag: flag });

	return role;
};

export const loadRoleByFlag = new DataLoader(async (keys) => {
    const rows = await Role.find({ "flag": { $in: keys } });
    return keys.map((key) => rows.find(({flag}) => flag === key));
});
