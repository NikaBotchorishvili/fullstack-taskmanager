export default async function deleteTask(id: string) {
	const res = await fetch(`http://127.0.0.1:5000/tasks/${id}/`, {
		method: "DELETE",
		headers: {
			"Content-Type": "application/json",
			"Access-Control-Allow-Origin": "http://127.0.0.1:3000/"
		}
	});
	if (!res.ok) {
		throw new Error("Error while fetching data");
	}
}