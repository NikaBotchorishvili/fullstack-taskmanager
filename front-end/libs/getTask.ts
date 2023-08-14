export default async function getTask(id: string) {
	const res = await fetch(`http://127.0.0.1:5000/tasks/${id}/`, {
		method: "GET",
		cache: "no-cache",
		headers: {
			"Content-Type": "application/json",
		}
	});
	if (!res.ok) {
		throw new Error("Error while fetching data");
	}

	return res.json();
}