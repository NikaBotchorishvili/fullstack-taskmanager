export default async function postTask(title: string) {
	const res = await fetch("http://127.0.0.1:5000/tasks/", {
		method: "POST",
		headers: { "Content-Type": "application/json; charset=UTF-8" },
		body: JSON.stringify({
			title: title,
		}),
	});

	if (!res.ok) {
		throw new Error("Error while fetching data");
	}
}
