"use strict";

const mongoose = require("mongoose"),
    { Schema } = require("mongoose"),
    Course = require("../schoolManagement/course"),
    User = require("../userManagement/user"),
    Cycle = require("../schoolManagement/cycle");

var lectureSchema = new Schema(
    {
        description: {
            type: String,
            required: true,
        },
        mentor: {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
        course: {
            type: Schema.Types.ObjectId,
            ref: "Course",
        },
        cycle: {
            type: Schema.Types.ObjectId,
            ref: "Cycle",
        },
        week: {
            type: Number,
        },
        date: {
            type: Date,
            required: true
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Lecture", lectureSchema);
