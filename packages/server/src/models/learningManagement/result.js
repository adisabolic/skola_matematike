"use strict";

const mongoose = require("mongoose"),
    { Schema } = require("mongoose"),
    Test = require("../learningManagement/test"),
    User = require("../userManagement/user");

var resultSchema = new Schema(
    {
        test: {
            type: Schema.Types.ObjectId,
            ref: "Test",
            required: true
        },
        student: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        discount: { // top 3 na testu dobije popust (ovdje izrazen u procentima)
            type: Number,
            default: 0
        },
        score: {
            type: Number,
            required: true
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Result", resultSchema);
