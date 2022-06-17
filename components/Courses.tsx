import javascript from "../images/courses/javascript.png";
import react from "../images/courses/react.png";
import figma from "../images/courses/figma.png";
import html5 from "../images/courses/html5.png";
import Image from "next/image";

function Courses() {
	return (
		<div className="alt-bg flex p-10 pl-16 pr-16">
			<div className="flex flex-col w-1/2 p-8">
				<span className="Recoleta text-4xl">
					We also have other interesting courses to learn
				</span>
				<p className="text-sm text-gray-700 mt-3">
					We also have courses you can enroll for which will broaden your
					knowledge in tech and also enable you learn a skill and make some cool
					cash.
				</p>
				<div className="flex flex-col mt-7 gap-3">
					<div className="flex items-center gap-3">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							className="bi bi-check-circle-fill"
							viewBox="0 0 16 16"
							fill="#0C6CA2"
						>
							<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
						</svg>
						<span className="text-md font-medium">Product Design</span>
					</div>
					<div className="flex items-center gap-3">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							className="bi bi-check-circle-fill"
							viewBox="0 0 16 16"
							fill="#0C6CA2"
						>
							<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
						</svg>
						<span className="text-md font-medium">Graphic Design</span>
					</div>
					<div className="flex items-center gap-3">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							className="bi bi-check-circle-fill"
							viewBox="0 0 16 16"
							fill="#0C6CA2"
						>
							<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
						</svg>
						<span className="text-md font-medium">Web Development</span>
					</div>
				</div>
				<button className="bg-main shadow-md rounded-full hover:opacity-90 text-white text-sm p-2 pl-7 pr-7 h-fit w-fit mt-7">
					Get Started
				</button>
			</div>

			<div className="grid grid-cols-2 gap-5 w-1/2 p-8">
				<div className="relative flex flex-col rounded-lg w-full h-60 p-4 items-start shadow-md">
					<Image
						src={javascript}
						height={40}
						width={40}
						className="object-left object-contain"
					/>
					<span className="text-lg font-semibold mt-3">Javascript</span>
					<p className="text-xs text-gray-700 mt-2">
						JavaScript, often abbreviated JS, is a programming language that is
						one of the core technologies of the World Wide Web, alongside HTML
						and CSS.
					</p>
					<p className="absolute text-sm font-semibold text-main hover:underline mt-3 bottom-5">
						LEARN MORE
					</p>
				</div>

				<div className="relative flex flex-col rounded-lg w-full h-60 p-4 items-start shadow-md">
					<Image
						src={react}
						height={40}
						width={40}
						className="object-left object-contain"
					/>
					<span className="text-lg font-semibold mt-3">React</span>
					<p className="text-xs text-gray-700 mt-2">
						React is a free and open-source front-end JavaScript library for
						building user interfaces based on UI components.
					</p>
					<p className="absolute text-sm font-semibold text-main hover:underline mt-3 bottom-5">
						LEARN MORE
					</p>
				</div>
				<div className="relative flex flex-col rounded-lg w-full h-60 p-4 items-start shadow-md">
					<Image
						src={figma}
						height={40}
						width={40}
						className="object-left object-contain"
					/>
					<span className="text-lg font-semibold mt-3">Figma</span>
					<p className="text-xs text-gray-700 mt-2">
						Figma is a vector graphics editor and prototyping tool which is
						primarily web-based, with additional offline features enabled by
						desktop applications for mac.
					</p>
					<p className="absolute text-sm font-semibold text-main hover:underline mt-3 bottom-5">
						LEARN MORE
					</p>
				</div>
				<div className="relative flex flex-col rounded-lg w-full h-60 p-4 items-start shadow-md">
					<Image
						src={html5}
						height={40}
						width={40}
						className="object-left object-contain"
					/>
					<span className="text-lg font-semibold mt-3">Html 5</span>
					<p className="text-xs text-gray-700 mt-2">
						he HyperText Markup Language or HTML is the standard markup language
						for documents designed to be displayed in a web browser
					</p>
					<p className="absolute text-sm font-semibold text-main hover:underline mt-3 bottom-5">
						LEARN MORE
					</p>
				</div>
			</div>
		</div>
	);
}

export default Courses;
