export function StemRacingOverview() {
	return (
		<section className="w-full rounded-2xl bg-white p-5 md:p-8 shadow-md fade-in-section">
			<div className="flex flex-col md:flex-row justify-between items-center gap-5 mb-4">
				<h1 className="text-2xl md:text-3xl font-bold text-[#3B9FE5]">
					The STEM Racing Competition
				</h1>
				<img
					src="/stem-racing-logo.png"
					alt="stem racing logo"
					className="w-[22vw] min-w-[8rem] max-w-[10rem] h-auto"
				/>
			</div>

			<div className="text-[#2C3E50] text-sm md:text-base space-y-3 md:max-w-[80%]">
				<p>
					STEM Racing (formerly Formula 1 in Schools) is a globally recognized
					international educational program involving high school students. The
					competition includes:
				</p>
				<ul className="list-disc list-inside space-y-2">
					<li>
						<strong>Engineering and Technology:</strong> design and
						implementation of a miniature race car using CAD software, CFU
						analysis, and CNC manufacturing
					</li>
					<li>
						<strong>Project Management:</strong> budget, timeline, resources
						control
					</li>
					<li>
						<strong>Communication:</strong> professional presentation of the
						project and brand identity
					</li>
					<li>
						<strong>Competition:</strong> timed races on a track with an
						electronic timing system
					</li>
				</ul>
				<p>
					Hundreds of teams participate in the Italian regional qualifiers, 50
					to 100+ teams per region in highly industrialized areas (Piedmont,
					Lombardy, Emilia-Romagna), and a variable number advance to the
					regional finals (top 10-15 per region). In the end, about 50-100 teams
					compete in the national championship in September.
				</p>
			</div>
		</section>
	);
}
