const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

// db
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("DB Connected"))
    .catch((error) => console.log(error));

const authRoutes = require("./routes/auth");

// middleware
app.use(morgan("dev"));
app.use(express.json());
app.use(cors({ origin: process.env.CLIENT_URL }));

app.use("/api", authRoutes);

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Listen on port ${port}`);
});
