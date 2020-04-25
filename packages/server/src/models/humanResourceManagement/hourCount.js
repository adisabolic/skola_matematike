"use strict";

const mongoose = require("mongoose"),
    { Schema } = require("mongoose");

// Govori koliko je jedan test casova i koliko je jedno predavanje casove (potrebno zbog isplate predavacima)
var hourCountSchema = new Schema(
    {
        type: { // test ili predavnje
            type: String,
            required: true
        },
        count: { // koliko casova iznosi
            type: Number,
            required: true
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("HourCount", hourCountSchema);
