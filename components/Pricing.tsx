function Pricing() {
	return (
		<div className="relative w-3/4 flex justify-center pt-20 pb-20">
			<div className="alt-bg flex flex-col w-1/2 rounded-lg p-8 shadow-lg">
				<span className="text-center text-2xl font-bold">Pricing</span>
				<div className="flex justify-between p-10">
					<div className="flex flex-col">
						<p className="text-gray-500 text-sm text-center font-medium">
							Starters
						</p>
						<span className="text-lg font-bold">$6,000/Mo</span>
					</div>
					<div className="flex flex-col">
						<p className="text-gray-500 text-sm text-center font-medium">
							Business
						</p>
						<span className="text-lg font-bold">$8,000/Mo</span>
					</div>
				</div>
				<div className="flex gap-2 pb-12">
					<label htmlFor="pricing" className="text-sm font-semibold">
						1
					</label>
					<input
						id="pricing"
						type={"range"}
						className="w-full appearance-none bg-main selection:bg-white  h-4 rounded-lg cursor-pointer"
						min={1}
						max={40}
						defaultValue={30}
					/>
					<label htmlFor="pricing" className="text-sm font-semibold">
						40+
					</label>
				</div>
			</div>
			<div className="flex items-center gap-2 p-3 w-fit h-fit shadow-lg bg-white rounded-md absolute bottom-14 right-28">
				<span className="text-sm">Ready to get started?</span>
				<button className="bg-main text-white text-sm  py-2 px-4 rounded-sm hover:opacity-90">
					Get Started
				</button>
			</div>
		</div>
	);
}

export default Pricing;
