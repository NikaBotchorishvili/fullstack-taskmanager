import {
	FontAwesomeIcon,
	FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";
import Link from "next/link";
type PropsType = {
	icon: any;
	id: string;
};

function Edit({ icon, id }: PropsType) {
	return (
		<Link href={`edit/${id}`}>
			<FontAwesomeIcon
				width={20}
				className="text-safron cursor-pointer"
				icon={icon}
			/>
		</Link>
	);
}

export default Edit;
