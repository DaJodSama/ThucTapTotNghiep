const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
	{
		username: { type: String, required: true, unique: true },
		email: { type: String, required: true, unique: true },
		password: { type: String, required: true },
		isAdmin: {
			type: Boolean,
			default: false,
		},
		address: { type: String },
		phoneNumber: { type: Number },
		fullName: { type: String },
	},
	{ timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
