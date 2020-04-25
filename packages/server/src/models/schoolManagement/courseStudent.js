"use strict";

const mongoose = require("mongoose"),
    User = require("../userManagement/user"),
    Course = require("../schoolManagement/course"),
    { Schema } = require("mongoose");

var courseStudentSchema = new Schema(
    {
        course: {
            type: Schema.Types.ObjectId,
            ref: "Course",
            required: true
        },
        student: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        enterDate: {
            type: Date
        },
        leaveDate: {
            type: Date
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("CourseStudent", courseStudentSchema);
