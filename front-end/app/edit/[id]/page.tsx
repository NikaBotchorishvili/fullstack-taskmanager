import getTask from "@/libs/getTask";
import EditForm from "./components/EditForm";
import updateTask from "@/libs/updateTask";

export async function generateMetadata({ params }: { params: { id: string } }){
    const task = await getTask(params.id)

	return {
		title: `edit task: ${task.title}`,
		description: `This page is to edit task: ${task}`
	};
}

export default async function ({ params }: { params: { id: string } }) {
    const task = await getTask(params.id)
    
    const handleUpdate = async (title: string) => {
        "use server"
        await updateTask(params.id, title);
    }
    return (
        <>
            <EditForm initialTitle={task.title} handleUpdate={handleUpdate} />
        </>
    );
}

