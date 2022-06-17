import Image from "next/image";
import Link from "next/link";
import Vector from "../images/vector.png";

function Header() {
	return (
		<div className="flex pt-5 justify-between items-center p-2 pl-12 pr-12">
			<Link href="/">
				<div className="p-2 ml-10 cursor-pointer">
					<Image src={Vector} height={51.88} width={51.88} />
				</div>
			</Link>
			<div className="flex items-center gap-16">
				<div className="flex gap-10 text-gray-400 ">
					<a href="#">About us</a>
					<a href="#">Our Service</a>
					<a href="#">The Team</a>
					<a href="#">Portfolio</a>
				</div>
				<Link href="/">
					<button className="bg-main rounded-full shadow-sm shadow-main p-3 text-sm text-white pl-8 pr-8 cursor-pointer hover:bg-opacity-90">
						Get in Touch
					</button>
				</Link>
			</div>
		</div>
	);
}

export default Header;
