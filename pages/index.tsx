import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import iVector from "../images/inline-vector.png";
import World from "../images/subway_world.png";
import Convo from "../images/convo_u.png";
import Sponsors from "../components/Sponsors";
import graph from "../images/arts/graph.png";
import sync from "../images/arts/sync.png";
import meter from "../images/arts/meter.png";
import gear from "../images/arts/gear.png";
import chat_heads from "../images/arts/chat_heads.png";
import stats from "../images/stats.png";
import wallet from "../images/wallet.png";
import Arrow from "../images/Arrow.svg";
import Pricing from "../components/Pricing";
import Courses from "../components/Courses";
import Feedback from "../components/Feedback";
import avatar1 from "../images/clients/avatar1.png";
import avatar2 from "../images/clients/avatar2.png";
import avatar3 from "../images/clients/avatar3.png";
import robot from "../images/robot.png";
import Footer from "../components/Footer";

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Home | Digital Agency</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			{/* main */}
			<div className="w-full flex gap-5 pl-16 pr-16 mt-7 mb-24 scroll-smooth">
				<div className="flex flex-col w-1/2">
					<div className="flex gap-2">
						<Image src={iVector} width={15} height={15} />
						<span className="text-main text-lg">
							Take a step forward in your growth
						</span>
					</div>
					<div className="Recoleta text-5xl mt-7">
						We Boost the growth for <span className="text-main">Startup </span>
						to impact 500 Companies around the world
						<div className="ml-3 inline">
							<Image src={World} width={45} height={45} />
						</div>
					</div>
					<p className="text-md mt-5 pr-40">
						It is a digital agency company, We can provide your business with a
						variety of digital solutions to promote your product or service
						online and help you hit your marketing goals and grow your business.
					</p>
					<div className="flex gap-1 mt-7 pr-28">
						<input
							type="email"
							className="w-full p-2 border-2 border-gray rounded-sm rounded-tl-lg"
							placeholder="Email Address"
						/>
						<button className="flex justify-center items-center bg-main w-36 h-12 rounded-sm rounded-br-lg hover:bg-opacity-90">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="22"
								height="22"
								fill="#ffffff"
								className="bi bi-chevron-right"
								viewBox="0 0 16 16"
							>
								<path
									fillRule="evenodd"
									d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
								/>
							</svg>
						</button>
					</div>
				</div>
				<div className="flex w-1/2 justify-center items-center">
					<Image src={Convo} width="560" height="360" />
				</div>
			</div>
			<Sponsors />
			<div className="flex flex-col pb-10 items-center">
				{/* Qualities */}
				<div className="flex items-center p-16 pt-20 pb-20 gap-16">
					<div className="flex flex-col">
						<span className="text-xs text-gold">ACHIEVEMENTS</span>
						<p className="Recoleta font-bold text-3xl mt-1">
							Pourpose of a Convoy is to keep your team together
						</p>
					</div>
					<div className="flex flex-col">
						<div className="flex flex-row gap-3 items-center">
							<Image src={graph} height={50} className="object-contain" />
							<span className="font-bold text-lg">Designed for Greatness</span>
						</div>
						<p className="text-sm text-gray-600 pl-20">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu in
							nisi, lacinia donec elit, habitant. Sed faucibus phasellus enim
							ullamcorper condimentum. Quam in vitae justo et.
						</p>
					</div>
					<div className="flex flex-col">
						<div className="flex flex-row gap-3 items-center">
							<Image src={sync} height={50} className="object-contain" />
							<span className="font-bold text-lg">
								Together we can sync with you
							</span>
						</div>
						<p className="text-sm text-gray-600 pl-20">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu in
							nisi, lacinia donec elit, habitant. Sed faucibus phasellus enim
							ullamcorper condimentum. Quam in vitae justo et.
						</p>
					</div>
				</div>
				{/* Purpose */}
				<div className="flex flex-col p-5 justify-center items-center">
					<span className="Recoleta text-center text-3xl">
						How can we help boost
						<br /> your business
					</span>
					<p className="text-lg text-gray-500 mt-5">
						There are many ways we can help your business grow
					</p>
				</div>
				{/* features */}
				<div className="flex gap-20 p-16 pt-10 pb-20 ">
					<div className="flex flex-col gap-3 items-center  w-full h-96 overflow-hidden p-9 pt-12 border-2 border-gray-200 rounded-lg">
						<Image src={chat_heads} height={60} className="object-contain" />
						<span className="text-lg font-medium">We find out your needs</span>
						<p className="text-sm text-gray-500 text-center h-52 overflow-ellipsis">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Scelerisque vitae faucibus donec amet vivamus dui eleifend. Diam
							sed tristique scelerisque risus, nulla aliquet id auctor in.
							Tincidunt adipiscing morbi hac nullam pellentesque in morbi
							ultricies. Nunc.
						</p>
					</div>
					<div className="flex flex-col gap-3 items-center w-full h-96 p-9 pt-12 border-2 border-gray-200 rounded-lg">
						<Image src={gear} height={60} className="object-contain" />
						<span className="text-lg font-medium">Figure out the details</span>
						<p className="text-sm text-gray-500 text-center">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Scelerisque vitae faucibus donec amet vivamus dui eleifend. Diam
							sed tristique scelerisque risus, nulla aliquet id auctor in.
							Tincidunt adipiscing morbi hac nullam pellentesque in morbi
							ultricies. Nunc.
						</p>
					</div>
					<div className="flex flex-col gap-3 items-center w-full h-96 p-9 pt-12 border-2 border-gray-200 rounded-lg">
						<Image src={meter} height={60} className="object-contain" />
						<span className="text-lg font-medium">Fast and quick delivery</span>
						<p className="text-sm text-gray-500 text-center">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Scelerisque vitae faucibus donec amet vivamus dui eleifend. Diam
							sed tristique scelerisque
						</p>
					</div>
				</div>
				<button className="bg-main mt-10 mb-10 hover:opacity-90 justify-center w-52 text-white text-sm rounded-full shadow-sm shadow-main p-2 pl-4 pr-4">
					Become a Partner
				</button>
				{/* Stats */}
				<div className="flex w-full p-16 pt-20 pb-20 gap-20">
					<div className="flex w-1/2 justify-center items-center">
						<Image src={stats} width={900} height={700} />
					</div>
					<div className="flex flex-col w-1/2 justify-center items-center-start p-5 ">
						<span className="text-xs text-green-500">SCHEDULE</span>
						<span className="Recoleta text-3xl w-96 mt-3">
							Your great customer relationship starts here
						</span>
						<p className="text-sm text-gray-500 mt-2">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est lorem
							orci, duis convallis velit, a. Quisque convallis feugiat sem leo
							blandit. Sociis in diam sed morbi. Dolor eget aenean aliquam quam
							mattis elit nisl, t.
						</p>
						<div className="flex items-center mt-6 hover:underline cursor-pointer">
							<a className="text-xs text-main mr-1">
								Learn more about publishing
							</a>
							<Image src={Arrow} height={20} width={20} />
						</div>
					</div>
				</div>
				{/* Wallet */}
				<div className="alt-bg flex w-full p-16 pt-20 pb-20 ">
					<div className="flex flex-col w-1/2 items-center-start p-5 ">
						<span className="text-xs text-gray-500">MENTOR</span>
						<span className="Recoleta text-3xl w-80 mt-3">
							Introducing the ever best mobile carousels
						</span>
						<p className="text-sm text-gray-500 mt-2">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est lorem
							orci, duis convallis velit, a. Quisque convallis feugiat sem leo
							blandit. Sociis in diam sed morbi. Dolor eget aenean aliquam quam
							mattis elit nisl, t.
						</p>
						<div className="flex items-center mt-6 hover:underline cursor-pointer">
							<a className="text-xs text-main mr-1">
								Learn more about publishing
							</a>
							<Image src={Arrow} height={20} width={20} />
						</div>
					</div>
					<div className="flex justify-center w-1/2 items-center">
						<Image src={wallet} width={500} height={500} />
					</div>
				</div>
				{/* Pricing */}
				<Pricing />
			</div>
			{/* Courses */}
			<Courses />
			{/*Feedbacks / Ratings*/}
			<div className="flex flex-col gap-10 pt-14 pb-10">
				<span className="Recoleta text-4xl font-bold text-center">
					Our Happy Clients
				</span>
				<div className="container-snap flex overflow-x-scroll mt-3">
					<div className="flex flex-nowrap lg:ml-30 md:ml-20 ml-10 mb-5 gap-10  ">
						<Feedback
							avatar={avatar1}
							name="Sandra Cash"
							comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quisque morbi facilisi tortor. Adipiscing platea magnis venenatis dui aliquet. Sit tristique arcu diam, ut. At."
						/>
						<Feedback
							avatar={avatar2}
							name="Chiamaka O."
							comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quisque morbi facilisi tortor. Adipiscing platea magnis venenatis dui aliquet. Sit tristique arcu diam, ut. At."
						/>
						<Feedback
							avatar={avatar3}
							name="Tessy Sandra"
							comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quisque morbi facilisi tortor. Adipiscing platea magnis venenatis dui aliquet. Sit tristique arcu diam, ut. At."
						/>
						<Feedback
							avatar={avatar3}
							name="Tessy Sandra"
							comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quisque morbi facilisi tortor. Adipiscing platea magnis venenatis dui aliquet. Sit tristique arcu diam, ut. At."
						/>
						<Feedback
							avatar={avatar3}
							name="Tessy Sandra"
							comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quisque morbi facilisi tortor. Adipiscing platea magnis venenatis dui aliquet. Sit tristique arcu diam, ut. At."
						/>
					</div>
				</div>
			</div>
			<div className="flex gap-2 pb-16 justify-center ">
				<div className="bg-main w-20 h-3 rounded-full"></div>
				<div className="bg-main w-10 h-3 rounded-full opacity-60"></div>
			</div>
			{/* Newsletter */}
			<div className="alt-bg w-full p-16">
				<div className="flex bg-white drop-shadow-lg rounded-xl">
					<div className="flex flex-col w-3/5 p-14 pr-24">
						<span className="text-3xl font-bold">Subscribe Newsletter</span>
						<p className="text-sm mt-3">
							You can always subscribe tou our newsletter to get events,
							updates, informations and also chat with us by sending us a mail.
						</p>
						<div className="flex gap-1 mt-12 pr-28 h-fit">
							<input
								type="email"
								className="w-full p-2 border-2 border-gray rounded-sm rounded-tl-lg"
								placeholder="Type in your Email Address"
							/>
							<button className="flex justify-center items-center bg-main w-36 h-12 rounded-sm rounded-br-lg hover:bg-opacity-90">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="22"
									height="22"
									fill="#ffffff"
									className="bi bi-chevron-right"
									viewBox="0 0 16 16"
								>
									<path
										fillRule="evenodd"
										d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
									/>
								</svg>
							</button>
						</div>
					</div>
					<div className="flex flex-col w-2/5">
						<Image
							src={robot}
							className="object-cover h-full w-full rounded-tr-xl rounded-br-xl"
						/>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Home;
