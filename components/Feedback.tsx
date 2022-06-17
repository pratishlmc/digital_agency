import Image, { StaticImageData } from "next/image";
import quotes from "../images/clients/quotes.png";
import stars from "../images/clients/stars.png";

interface Props {
	name: string;
	avatar: StaticImageData;
	comment: string;
}
function Feedback({ name, avatar, comment }: Props) {
	return (
		<div className="relative flex flex-col w-96 h-fit bg-white p-10 pl-14 pr-14 rounded-lg drop-shadow-lg justify-center ">
			<div className="absolute ">
				<Image
					src={quotes}
					height={40}
					className="object-contain object-left mb-7 pr-10"
				/>
			</div>
			<Image src={avatar} height={70} width={70} className="object-contain" />
			<div className="mt-3">
				<Image
					src={stars}
					height={45}
					className="object-contain object-center"
				/>
			</div>
			<span className="text-lg font-semibold text-center mt-2">{name}</span>
			<span className="text-xs text-gray-700 mt-2 pl-5 pr-5">{comment}</span>
		</div>
	);
}

export default Feedback;
