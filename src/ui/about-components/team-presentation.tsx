import { opensans700 } from "@/src/ui/fonts";

export function TeamPresentation() {
	return (
		<div className="w-screen max-w-full flex flex-col md:flex-row items-center justify-center gap-4 md:gap-12 px-4 md:px-8 py-6 md:py-12 bg-white">
			<div className="w-full md:w-auto flex justify-center md:justify-start">
				<div className="relative w-40 h-40 md:w-64 md:h-64 flex items-center justify-center bg-gradient-to-br from-[#3B9FE5] to-[#7EC8E3] rounded-full shadow-lg">
					<img
						src="/rev-racing-logos/logo-black.png"
						alt="Team Logo"
						className="w-32 h-32 md:w-48 md:h-48 object-contain"
					/>
				</div>
			</div>
			<div className="w-full md:w-1/2 flex flex-col gap-3">
				<h2
					className={`${opensans700.className} text-xl md:text-3xl text-[#3B9FE5] leading-tight`}>
					Our Team
				</h2>
				<p className="text-sm md:text-base text-[#2C3E50] leading-relaxed font-normal">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque,
					magnam! Similique tenetur eaque accusamus omnis facilis cumque
					pariatur labore reprehenderit recusandae, corrupti excepturi delectus
					optio tempore iste autem aperiam. Magnam?
				</p>
			</div>
		</div>
	);
}
