"use client";
import { ChangeEvent, FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

type Props = {
	initialTitle: string;
	handleUpdate: (title: string) => void;
};

function EditForm({ initialTitle, handleUpdate }: Props) {
	const [title, setTitle] = useState<string>(initialTitle);
	const router = useRouter();
	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setTitle(value);
	};

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (title !== "") {
			handleUpdate(title);
            router.refresh();
			router.push("/")
		}
	};

	return (
		<section>
			<form
				className="flex flex-col items-center w-full gap-y-10"
				onSubmit={(e) => handleSubmit(e)}
			>
				<div className="flex flex-col">
					<label htmlFor="title">Title:</label>
					<input
						type="text"
						name="title"
						className="px-5 py-3 border border-black rounded-xl"
						value={title}
						onChange={(e) => handleChange(e)}
						placeholder="e.g: Drink Some Coffee"
					/>
				</div>
				<button className="px-8 py-2 border border-black">
					Submit
				</button>
			</form>
		</section>
	);
}

export default EditForm;
