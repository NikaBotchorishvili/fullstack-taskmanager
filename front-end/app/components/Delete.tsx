"use client";
import deleteTask from "@/libs/deleteTask";
import {
	FontAwesomeIcon,
} from "@fortawesome/react-fontawesome";
import { redirect } from "next/navigation";
import { useRouter } from 'next/navigation'
type PropsType = {
    icon: any;
    id: string;
}


function Delete({icon, id}: PropsType) {
    const router = useRouter()
	const handleDelete = () => {
        deleteTask(id);
        redirect("/")
    }

	return (
		<FontAwesomeIcon
			width={20}
			className="text-burntSienna cursor-pointer"
			onClick={handleDelete}
			icon={icon}
		/>
	);
}

export default Delete;
