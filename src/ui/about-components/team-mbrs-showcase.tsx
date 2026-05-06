"use client";

import { TM } from "@/src/lib/about/tm";
import { SingleTeamMbr } from "./single-team-mbr";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/src/components/carousel";
import { poppins600 } from "@/src/ui/fonts";

export function TeamMembersShowcase({ team }: { team: TM[] }) {
	return (
		<div className="w-screen max-w-full px-4 md:px-8 py-8 md:py-16 bg-[#E8F5FC]">
			<div className="flex flex-col gap-4 md:gap-8 max-w-7xl mx-auto">
				<h2
					className={`${poppins600.className} text-2xl md:text-4xl text-[#3B9FE5] text-center`}>
					Meet Our Team
				</h2>

				<Carousel
					opts={{
						align: "center",
						loop: true,
					}}
					className="w-full">
					<div className="relative">
						<CarouselContent className="gap-4 md:gap-6">
							{team.map((member) => (
								<CarouselItem
									key={member.id}
									className="basis-full md:basis-1/2 lg:basis-1/3 flex justify-center animate-fade-in">
									<SingleTeamMbr tm={member} />
								</CarouselItem>
							))}
						</CarouselContent>

						<div className="hidden md:flex justify-between absolute -left-16 -right-16 top-1/2 -translate-y-1/2 pointer-events-none">
							<CarouselPrevious className="relative left-0 translate-y-0 pointer-events-auto bg-[#3B9FE5] hover:bg-[#7EC8E3] text-white border-none shadow-md" />
							<CarouselNext className="relative right-0 translate-y-0 pointer-events-auto bg-[#3B9FE5] hover:bg-[#7EC8E3] text-white border-none shadow-md" />
						</div>

						<div className="flex md:hidden justify-center gap-4 mt-6">
							<CarouselPrevious className="relative left-0 translate-y-0 bg-[#3B9FE5] hover:bg-[#7EC8E3] text-white border-none shadow-md w-10 h-10" />
							<CarouselNext className="relative right-0 translate-y-0 bg-[#3B9FE5] hover:bg-[#7EC8E3] text-white border-none shadow-md w-10 h-10" />
						</div>
					</div>
				</Carousel>
			</div>
		</div>
	);
}
