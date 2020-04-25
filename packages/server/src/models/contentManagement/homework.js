"use strict";

const mongoose = require("mongoose"),
    { Schema } = require("mongoose"),
    Course = require("../schoolManagement/course"),
    User = require("../userManagement/user");

var homeworkSchema = new Schema(
    {
        author: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        course: {
            type: Schema.Types.ObjectId,
            ref: "Course",
            required: true
        },
        dueDate: {
            type: Date
        },
        file: {
            type: String,
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Homework", homeworkSchema);
