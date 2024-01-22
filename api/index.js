const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
var cors = require("cors");

dotenv.config();
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");
const productRoute = require("./routes/products");
const orderRoute = require("./routes/order");
const cartRoute = require("./routes/cart");
const stripeRoute = require("./routes/stripe");

const multer = require("multer");
const path = require("path");

app.use(express.json());
app.use(cors());
app.use("/images", express.static(path.join(__dirname, "/images")));

mongoose
	.connect(process.env.MONGO_URL)
	.then(() => console.log("DB Connection Successfull!"))
	.catch((err) => {
		console.log(err);
	});

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, "images");
	},
	filename: (req, file, cb) => {
		cb(null, req.body.name);
	},
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
	res.status(200).json("File has been uploaded");
});

app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoryRoute);
app.use("/api/products", productRoute);
app.use("/api/orders", orderRoute);
app.use("/api/carts", cartRoute);
app.use("/api/checkout", stripeRoute);

app.listen(process.env.PORT || 5000, () => {
	console.log("Backend is running.");
});
