"use client"
type PropsType = {
	icon: any;
};

import postTask from "@/libs/postTask";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import { ChangeEvent, MouseEvent, useState } from "react";

function Create({ icon }: PropsType) {

    const [ title, setTitle ] = useState<string>("");
    const router = useRouter();
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setTitle(value);
        
    }

    const handlePost = async(e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if(title !== ""){
            postTask(title);
            setTitle("");
            router.refresh();
        }
    }
	return (
		<form className="relative w-fit" >
			<input
				type="text"
				name="title"
				className="px-5 py-3 border border-black rounded-xl"
                value={title}
                onChange={(e) => handleChange(e)}
			/>
			<button onClick={(e) => handlePost(e)} className="absolute top-1/2 right-5 -translate-y-1/2">
				<FontAwesomeIcon className="text-[#000000]" width={20} icon={icon} />
			</button>
		</form>
	);
}

export default Create;
