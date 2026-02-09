export function HeroSection({ heroHight }: { heroHight?: number }) {
	return (
		<div className="bg-rr-black p-8 h-screen w-screen">
			<h1 className="text-4xl font-bold text-white">
				Welcome to Revolution Racing
			</h1>
			<p className="text-lg text-white">
				Join us in revolutionizing the racing experience.
			</p>
		</div>
	);
}
