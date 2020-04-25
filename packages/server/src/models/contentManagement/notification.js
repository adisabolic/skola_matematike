"use strict";

const mongoose = require("mongoose"),
    { Schema } = require("mongoose"),
    User = require("../userManagement/user");

var notificationSchema = new Schema(
    {
        author: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        text: {
            type: String,
            required: true,
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Notification", notificationSchema);
