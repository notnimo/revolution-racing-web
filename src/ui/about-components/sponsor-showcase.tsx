"use client";

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/src/components/carousel";

import { SponsorPack } from "@/src/lib/about/sponsor";

import { poppins600 } from "@/src/ui/fonts";
import { SponsorCard } from "@/src/ui/about-components/sponsor-card";

interface SponsorShowcaseProps {
	sponsors: SponsorPack;
}

export function SponsorShowcase({ sponsors }: SponsorShowcaseProps) {
	return (
		<div className="w-screen max-w-full px-4 md:px-8 py-8 md:py-16 bg-white">
			<div className="flex flex-col gap-6 md:gap-12 max-w-7xl mx-auto">
				<h2
					className={`${poppins600.className} text-2xl md:text-4xl text-[#3B9FE5] text-center`}>
					Our Sponsors
				</h2>

				<div className="flex flex-col gap-8 md:gap-12">
					<div>
						<SponsorCard sponsor={sponsors.main} tier="main" />
					</div>

					{sponsors.platinum.length > 0 && (
						<div className="flex flex-col gap-3">
							<Carousel
								opts={{
									align: "center",
									loop: true,
								}}
								className="w-full">
								<div className="relative">
									<CarouselContent className="gap-4">
										{sponsors.platinum.map((sponsor) => (
											<CarouselItem
												key={sponsor.id}
												className="basis-full md:basis-1/2 lg:basis-1/3 flex justify-center">
												<SponsorCard sponsor={sponsor} tier="platinum" />
											</CarouselItem>
										))}
									</CarouselContent>

									{sponsors.platinum.length > 1 && (
										<>
											<div className="hidden md:flex justify-between absolute -left-14 -right-14 top-1/2 -translate-y-1/2 pointer-events-none">
												<CarouselPrevious className="relative left-0 translate-y-0 pointer-events-auto bg-[#1FBEB6] hover:bg-[#1FBEB6]/80 text-white border-none shadow-md w-8 h-8" />
												<CarouselNext className="relative right-0 translate-y-0 pointer-events-auto bg-[#1FBEB6] hover:bg-[#1FBEB6]/80 text-white border-none shadow-md w-8 h-8" />
											</div>

											<div className="flex md:hidden justify-center gap-4 mt-4">
												<CarouselPrevious className="relative left-0 translate-y-0 bg-[#1FBEB6] hover:bg-[#1FBEB6]/80 text-white border-none shadow-md w-8 h-8" />
												<CarouselNext className="relative right-0 translate-y-0 bg-[#1FBEB6] hover:bg-[#1FBEB6]/80 text-white border-none shadow-md w-8 h-8" />
											</div>
										</>
									)}
								</div>
							</Carousel>
						</div>
					)}

					{sponsors.gold.length > 0 && (
						<div className="flex flex-col gap-3">
							<Carousel
								opts={{
									align: "center",
									loop: true,
								}}
								className="w-full">
								<div className="relative">
									<CarouselContent className="gap-4">
										{sponsors.gold.map((sponsor) => (
											<CarouselItem
												key={sponsor.id}
												className="basis-full md:basis-1/2 lg:basis-1/3 flex justify-center">
												<SponsorCard sponsor={sponsor} tier="gold" />
											</CarouselItem>
										))}
									</CarouselContent>

									{sponsors.gold.length > 1 && (
										<>
											<div className="hidden md:flex justify-between absolute -left-14 -right-14 top-1/2 -translate-y-1/2 pointer-events-none">
												<CarouselPrevious className="relative left-0 translate-y-0 pointer-events-auto bg-[#7EC8E3] hover:bg-[#7EC8E3]/80 text-white border-none shadow-md w-8 h-8" />
												<CarouselNext className="relative right-0 translate-y-0 pointer-events-auto bg-[#7EC8E3] hover:bg-[#7EC8E3]/80 text-white border-none shadow-md w-8 h-8" />
											</div>

											<div className="flex md:hidden justify-center gap-4 mt-4">
												<CarouselPrevious className="relative left-0 translate-y-0 bg-[#7EC8E3] hover:bg-[#7EC8E3]/80 text-white border-none shadow-md w-8 h-8" />
												<CarouselNext className="relative right-0 translate-y-0 bg-[#7EC8E3] hover:bg-[#7EC8E3]/80 text-white border-none shadow-md w-8 h-8" />
											</div>
										</>
									)}
								</div>
							</Carousel>
						</div>
					)}

					{sponsors.silver.length > 0 && (
						<div className="flex flex-col gap-3">
							<Carousel
								opts={{
									align: "center",
									loop: true,
								}}
								className="w-full">
								<CarouselContent className="gap-4">
									{sponsors.silver.map((sponsor) => (
										<CarouselItem
											key={sponsor.id}
											className="basis-full md:basis-1/2 lg:basis-1/3 flex justify-center">
											<SponsorCard sponsor={sponsor} tier="silver" />
										</CarouselItem>
									))}
								</CarouselContent>
							</Carousel>
						</div>
					)}

					{sponsors.others.length > 0 && (
						<div className="flex flex-col gap-3">
							<Carousel
								opts={{
									align: "center",
									loop: true,
								}}
								className="w-full">
								<CarouselContent className="gap-4">
									{sponsors.others.map((sponsor) => (
										<CarouselItem
											key={sponsor.id}
											className="basis-full md:basis-1/2 lg:basis-1/3 flex justify-center">
											<SponsorCard sponsor={sponsor} tier="other" />
										</CarouselItem>
									))}
								</CarouselContent>
							</Carousel>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
