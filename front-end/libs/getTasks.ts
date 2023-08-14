export default async function getTasks() {
	const res = await fetch("http://127.0.0.1:5000/tasks/", {
		method: "GET",
		cache: "no-cache",
		headers: { "Context-Type": "application/json" },
	});

	if (!res.ok) {
		throw new Error("Failed to fetch the data");
	}
	return res.json();
}