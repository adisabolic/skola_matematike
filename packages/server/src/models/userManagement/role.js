const mongoose = require("mongoose"),
    { Schema } = require("mongoose");

var roleSchema = new Schema(
    {
		flag: {
			type: Number,
            required: true,
			unique: true
		},
        name: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Role", roleSchema);
