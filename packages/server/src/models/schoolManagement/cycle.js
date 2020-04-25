"use strict";

const mongoose = require("mongoose"),
    { Schema } = require("mongoose"),
    SchoolYear = require("../schoolManagement/schoolYear");

var cycleSchema = new Schema(
    {
        year: {
            type: Schema.Types.ObjectId,
            ref: "SchoolYear",
            required: true
        },
        ordinalNumber: {
            type: Number,
            required: true
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Cycle", cycleSchema);
