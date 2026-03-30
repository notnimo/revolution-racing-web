export function HeroSection() {
	return (
		<section className="relative h-screen w-screen overflow-hidden bg-gradient-to-b from-[#3B9FE5] to-[#E8F5FC] p-5 md:p-10">
			<div className="absolute inset-0 overflow-hidden">
				<img
					src="/car-hero.png"
					alt="Car Hero"
					className="hidden md:block h-full w-full object-cover object-center opacity-80"
				/>
			</div>

			<div className="relative z-10 flex h-full flex-col justify-start items-start text-white md:text-[#2C3E50] pt-[27vh]">
				<h1 className="text-3xl md:text-6xl font-bold leading-tight max-w-[90vw] md:max-w-[50vw] mb-4">
					Welcome to Revolution Racing
				</h1>
			</div>
		</section>
	);
}
