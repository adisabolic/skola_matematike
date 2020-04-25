"use strict";

const mongoose = require("mongoose"),
    Course = require("../schoolManagement/course"),
    { Schema } = require("mongoose");

// Govori koliko je jedan cas placen po grupama
var hourPriceSchema = new Schema(
    {
        course: {
            type: Schema.Types.ObjectId,
            ref: "Course",
            required: true
        },
        price: {
            type: Number,
            required: true
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("HourPrice", hourPriceSchema);
