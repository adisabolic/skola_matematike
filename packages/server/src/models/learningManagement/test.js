"use strict";

const mongoose = require("mongoose"),
    { Schema } = require("mongoose"),
    Course = require("../schoolManagement/course"),
    User = require("../userManagement/user"),
    Cycle = require("../schoolManagement/cycle");

var testSchema = new Schema(
    {
        course: {
            type: Schema.Types.ObjectId,
            ref: "Course",
            required: true
        },
        mentor: {
            type: Schema.Types.ObjectId,
            ref: "Mentor",
            required: true
        },
        cycle: {
            type: Schema.Types.ObjectId,
            ref: "Cycle",
        },
        maxScore: {
            type: Number,
        },
        numberOfProblems: {
            type: Number,
        },
        date: {
            type: Date,
            required: true
        },
        fileProblems: {
            type: String
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Test", testSchema);
