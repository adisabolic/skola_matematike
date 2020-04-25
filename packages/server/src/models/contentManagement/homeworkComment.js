"use strict";

const mongoose = require("mongoose"),
    { Schema } = require("mongoose"),
    User = require("../userManagement/user"),
    Homework = require("../contentManagement/homework");

var homeworkCommentSchema = new Schema(
    {
        author: {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
        homework: {
            type: Schema.Types.ObjectId,
            ref: "Homework",
            required: true
        },
        text: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("HomeworkComment", homeworkCommentSchema);
