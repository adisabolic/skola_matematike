"use strict";

const mongoose = require("mongoose"),
    { Schema } = require("mongoose"),
    SchoolYear = require("../schoolManagement/schoolYear");

var courseSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        year: {
            type: Schema.Types.ObjectId,
            ref: "SchoolYear",
            required: true
        },
        archived: {
            type: Boolean,
            default: false
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Course", courseSchema);
