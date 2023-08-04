import { config } from "dotenv";
import connectDb from "./config/dbConnection";

config();
connectDb();

import express from "express";
import mongoose from "mongoose";

import TaskRouter from "./routes/tasks";
const PORT = 5000;
import cors from "cors";

const app = express();
app.use(express.json());
app.use(
	cors({
		origin: ["http://127.0.0.1:3000/", "localhost:3000/"],
	})
);
mongoose.connection.on("open", () => {
	app.listen(PORT, () => {
		console.log(`Listening on port ${PORT}!`);
	});
});

app.use("/tasks", TaskRouter);
