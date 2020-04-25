"use strict";

const mongoose = require("mongoose"),
    User = require("../userManagement/user"),
    Cycle = require("../schoolManagement/cycle"),
    { Schema } = require("mongoose");

var studentPaymentSchema = new Schema(
    {
        student: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        cycle: { // svake godine postoje 4 ciklusa, u svakom ciklusu 4 sedmice
            type: Schema.Types.ObjectId,
            ref: "Cycle",
            required: true
        },
        paymentAmount: {
            type: Number,
            required: true
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("StudentPayment", studentPaymentSchema);
