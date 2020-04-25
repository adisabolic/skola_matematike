"use strict";

const mongoose = require("mongoose"),
    { Schema } = require("mongoose");

var schoolYearSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        startYear: {
            type: Number
        },
        active: {
            type: Boolean,
            default: false
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("schoolYear", schoolYearSchema);
