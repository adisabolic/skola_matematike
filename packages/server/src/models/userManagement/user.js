const mongoose = require("mongoose"),
    { Schema } = require("mongoose"),
	Role = require("../userManagement/role"),
    Course = require("../schoolManagement/course");

var userSchema = new Schema(
    {
        role: {
            type: Number,
            required: true
        },
        name: {
            type: String,
            required: true,
            trim: true
        },
        surname: {
            type: String,
            required: true,
            trim: true
        },
		email: {
            type: String,
            required: true,
            unique: true
        },
		password: {
			type: String,
			required: true
		},
        course: {
            type: Schema.Types.ObjectId,
            ref: "Course"
        },
        active: { // oznacava da li ucenik trenutno pohadja skolu ili je zavrsio/odustao
            type: Boolean,
        },
        member: { // oznacava da li je ucenik clan udruzenja, u tom slucaju je jeftinije placanje
            type: Boolean,
        },
        phone: {
            type: String,
        },
        class: {
            type: String,
        },
        school: {
            type: String,
        },
        entity: {
            type: String,
        },
        city: {
            type: String,
        },
        parentName: {
            type: String,
        },
        parentPhone: {
            type: String,
        },
        parentEmail: {
            type: String
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("User", userSchema);
