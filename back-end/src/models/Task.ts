type Task = {
	title: string;
	completed: boolean;
	created: Date;
};
import { Schema, model } from "mongoose";

const TaskSchema = new Schema<Task>({
	title: { required: true, type: String },
	completed: { type: Boolean, default: false },
	created: { type: Date, default: Date.now, immutable: true },
});

const Task = model("task", TaskSchema);

export default Task;
