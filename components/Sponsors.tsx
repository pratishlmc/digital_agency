import youtube from "../images/sponsors/youtube.png";
import vsr from "../images/sponsors/vsr.png";
import slack from "../images/sponsors/slack.png";
import google_play from "../images/sponsors/google-play.png";
import upwork from "../images/sponsors/upwork.png";
import Image from "next/image";

function Sponsors() {
	return (
		<div className="alt-bg flex h-48 gap-16 justify-start items-center pl-16">
			<span className="text-gray-500 text-lg">Our Sponsors</span>
			<Image src={upwork} className="object-contain" height={35} />
			<Image src={google_play} className="object-contain" height={35} />
			<Image src={slack} className="object-contain" height={35} />
			<Image src={vsr} className="object-contain" height={35} />
			<Image src={youtube} className="object-contain" height={35} />
		</div>
	);
}

export default Sponsors;
