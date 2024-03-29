const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

//not use crypto

//REGISTER
router.post("/register", async (req, res) => {
	// const salt = await bcrypt.genSalt(10);
	// const hashedPass = await bcrypt.hash(req.body.password, salt);
	const newUser = new User({
		username: req.body.username,
		email: req.body.email,
		password: CryptoJS.AES.encrypt(
			req.body.password,
			process.env.PASS_SEC
		).toString(),
	});
	try {
		const user = await newUser.save();
		res.status(200).json(user);
	} catch (err) {
		res.status(500).json(err);
	}
});

//LOGIN
router.post("/login", async (req, res) => {
	try {
		const user = await User.findOne({ username: req.body.username });

		if (!user) {
			res.status(401).json("Wrong Username!");
			return;
		}

		const hashedPassword = CryptoJS.AES.decrypt(
			user.password,
			process.env.PASS_SEC
		);
		const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
		const inputPassword = req.body.password;

		if (originalPassword !== inputPassword) {
			res.status(401).json("Wrong Password");
			return;
		}

		const accessToken = jwt.sign(
			{
				id: user._id,
				isAdmin: user.isAdmin,
			},
			process.env.JWT_SEC,
			{ expiresIn: "3d" }
		);

		//rest operator
		const { password, ...others } = user._doc;

		res.status(200).json({...others,accessToken});
	} catch (err) {
		res.status(500).json(err);
	}
});

module.exports = router;
