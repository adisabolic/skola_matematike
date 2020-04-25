"use strict";

const mongoose = require("mongoose"),
    User = require("../userManagement/user"),
    Cycle = require("../schoolManagement/cycle"),
    { Schema } = require("mongoose");

var mentorPaymentSchema = new Schema(
    {
        mentor: {
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
        },
        paidTo: { // ponekad se nekom predavacu uplati za nekog drugog
            type: Schema.Types.ObjectId,
            ref: "User",
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("MentorPayment", mentorPaymentSchema);
