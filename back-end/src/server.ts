import { config } from "dotenv";
import connectDb from "./config/dbConnection";

config();
connectDb();

import express from "express";
import mongoose from "mongoose";

import TaskRouter from "./routes/tasks";
const PORT = 5000;
import cors from "cors";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(
	cors({
		origin: "*",
	})
);
mongoose.connection.on("open", () => {
	app.listen(PORT, () => {
		console.log(`Listening on port ${PORT}!`);
	});
});

app.use("/tasks", TaskRouter);
