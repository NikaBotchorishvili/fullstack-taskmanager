export default async function updateTask(id: string, title: string) {
	console.log("BEN")
	console.log(title);
	const res = await fetch(`http://127.0.0.1:5000/tasks/${id}`, {
		method: "PUT",
		cache: "no-cache",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(
            { title: title }
        ),
	});

    if(!res.ok){
        throw new Error("Error while fetching data")
    }

	return res.status;
}
