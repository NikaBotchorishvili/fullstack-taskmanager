import express, { Request, Response } from "express";
import Task from "../models/Task";
const TaskRouter = express.Router();

TaskRouter.route("/")
	.get(async (req: Request, res: Response) => {
		const query = Task.find();
		const data = await query.exec();

		return res.status(200).json(JSON.stringify(data));
	})
	.post(async (req: Request, res: Response) => {
		const { title } = req.body;
		await Task.create({ title });
		return res.sendStatus(200);
	});

TaskRouter.route("/:id")
	.get(async (req: Request, res: Response) => {
        const { id } = req.params;
        const query = Task.findOne({_id: id})
        const data = await query.exec();
        
        if(!data){
            return res.sendStatus(204);
        }
        return res.status(200).json(data);
    })  
	.put((req: Request, res: Response) => {
		const { id } = req.params;
		const { title, completed } = req.body;
		const query = Task.findOneAndUpdate(
			{ _id: id },
			{ title: title, completed: completed }
		).exec();

		console.log(completed);
		return res.sendStatus(201);
	});

export default TaskRouter;
