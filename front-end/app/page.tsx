import {
	faTrashCan,
	faEdit,
	faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import getTasks from "@/libs/getTasks";
import Delete from "./components/Delete";
import Edit from "./components/Edit";
import Create from "./components/Create";

type Task = {
	_id: string;
	title: string;
	completed: boolean;
	created: Date;
};


export default async function Home() {
	const tasksData: Task[] = JSON.parse(await getTasks());

	const content = tasksData.map((task) => (
		<li className="flex w-96 justify-between py-5 px-3 shadow-2xl " key={task._id}>
			<div className="flex gap-x-5">
				<input type="checkbox" name="completed" />
				<Link
					href={`/${task._id}/`}
					className={`${
						task.completed ? "line-through" : "no-underline"
					}`}
				>
					{task.title}
				</Link>
			</div>
			<div className="flex gap-x-10 items-center">
				<Edit icon={faEdit} id={task._id} />
				<Delete icon={faTrashCan} id={task._id} />
			</div>
		</li>
	));
	return (
		<main className="text-center mt-10 flex flex-col items-center">
			<section className="flex flex-col gap-6">
				<h1 className="text-5xl">Tasks</h1>
				<Create icon={faMagnifyingGlass} />
			</section>
			<ul className="flex flex-col mt-20  gap-y-5 items-center">{content}</ul>
		</main>
	);
}
