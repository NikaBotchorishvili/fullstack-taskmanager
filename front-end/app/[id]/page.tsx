import { Task } from "@/types";
import { Metadata } from "next";
import getTask  from "@/libs/getTask";
import getTasks from "@/libs/getTasks";


export async function getStaticPaths() {
	const res = await getTasks();
	const Tasks: Task[] = JSON.parse(await res);
	const paths = Tasks.map(task => ({params:{id: task._id}}));

	return {paths, fallback: false};
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
	const task: Task = await getTask(params.id);


	return {
		title: `task: ${task.title}`,
		description: `This page emphasizes task: ${task}`
	};
}

export default async function Task({ params }: { params: { id: string } }) {
	const tasksData: Promise<Task> = getTask(params.id);
	const task = await tasksData;
	return (
		<main className="flex text-center justify-center mt-20">
			<h1 className="text-7xl">{task.title}</h1>
		</main>
	);
}

