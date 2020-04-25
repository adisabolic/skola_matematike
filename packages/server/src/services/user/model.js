const mongoose = require("mongoose"),
    { Schema } = require("mongoose"),
	bcrypt = require("bcryptjs"),
	jwt = require("jsonwebtoken");

import DataLoader from 'dataloader';

export const User = require("../../models/userManagement/user.js");


export const register = async (input) => {

	const hashedPassword = await bcrypt.hash(input.password, 10);

	const user = await User.create({
        role: input.role,
		name: input.name,
		surname: input.surname,
		email: input.email,
        course: input.course || null,
		active: input.active || null,
		member: input.member || null,
		phone: input.phone || null,
		class: input.class || null,
		school: input.school || null,
		entity: input.entity || null,
		city: input.city || null,
		parentName: input.parentName || null,
		parentPhone: input.parentPhone || null,
		parentEmail: input.parentEmail || null,
        password: hashedPassword,
	});

	return user;
};


export const login = async ({email, password}) => {
	const user = await User.findOne({ email: email });

	if (!user) {
		throw new Error('Invalid Login');
	}

	const passwordMatch = await bcrypt.compare(password, user.password);

	if (!passwordMatch) {
		throw new Error('Invalid Login');
	}


	const token = jwt.sign(
		{
			_id: user._id,
            role: user.role,
            name: user.name,
            surname: user.surname,
			email: user.email,
            course: user.course,
            active: user.active,
            member: user.member,
            phone: user.phone,
            class: user.class,
            school: user.school,
            entity: user.entity,
            city: user.city,
            parentName: user.parentName,
            parentPhone: user.parentPhone,
            parentEmail: user.parentEmail,
		},
		'tajniKljuc123',
		{
			expiresIn: '30d',
		},
	);

	return {
		token,
		user,
	}
};

export const currentUser = async (user) => {
    if (!user) {
        throw new Error('Not Authenticated')
    }
    console.log(user);
    return user;
};

export const getAllUsers = async ({ condition, limit = Number.MAX_SAFE_INTEGER, offset = 0, sortBy = 'surname name' }) => {
    const users = await User.find(condition).sort(sortBy).skip(offset).limit(limit);
    return { nodes: users };
};

export const getUserById = async (id) => {
    const user = await User.findById(id);
    return user;
};

export const updateUser = async (id, input) => {
	const user = await User.findByIdAndUpdate(id, { '$set': input });
	return user;
};

export const deleteUser = async (id) => {
    const user = await User.findById(id);
	const deleted = await User.findByIdAndDelete(id);

	if(!deleted)
		throw Error("Error deleting a user!");

	return user;
};


export const adminOnly = (user) => {
    if(!user)
        throw Error('Unauthenticated');
    else if(user.role != 1)
        throw Error('Unauthorized access - admin privileges required');
};

export const adminMentorOnly = (user) => {
    if(!user)
        throw Error('Unauthenticated');
    if(user.role != 2 && user.role != 1)
        throw Error('Unauthorized access - admin or mentor privileges required');
};

export const studentOnly = (user) => {
    if(!user)
        throw Error('Unauthenticated');
    else if(user.role != 3)
        throw Error('Unauthorized access - student privileges required');
};

export const loggedIn = (user) => {
    if(!user)
        throw Error('Unauthenticated');
};

export const loadUserById = new DataLoader(async (keys) => {
    const rows = await User.find({ "_id": { $in: keys } });
    return keys.map((key) => rows.find(({_id}) => _id.equals(key)));
});
