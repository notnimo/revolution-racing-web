"use client";

import { Sponsor, SponsorPack } from "@/src/lib/about/sponsor";
import { poppins600, opensans700 } from "@/src/ui/fonts";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/src/components/carousel";
import {
	EngineeringSupportBadge,
	TechnicalSupportBadge,
	FinancialSupportBadge,
	MediaPartnerBadge,
	UniformPartnerBadge,
	OtherSupportBadge,
} from "@/src/ui/badges";

const badgeComponentMap = {
	"engineering support": EngineeringSupportBadge,
	"technical support": TechnicalSupportBadge,
	"financial support": FinancialSupportBadge,
	"media partner": MediaPartnerBadge,
	"uniform partner": UniformPartnerBadge,
	other: OtherSupportBadge,
};

interface SponsorShowcaseProps {
	sponsors: SponsorPack;
}

function SponsorCard({
	sponsor,
	tier,
}: {
	sponsor: Sponsor;
	tier: "main" | "platinum" | "gold" | "silver" | "other";
}) {
	const isMaintier = tier === "main";
	const isPlatinum = tier === "platinum";
	const isGold = tier === "gold";

	if (isMaintier) {
		return (
			<div className="w-full flex flex-col gap-4 md:gap-8 items-center bg-gradient-to-br from-[#3B9FE5]/10 to-[#1FBEB6]/10 rounded-3xl p-6 md:p-12 border-2 border-[#3B9FE5]/30">
				<img
					src={sponsor.primaryLogo}
					alt={sponsor.name}
					className="h-40 md:h-56 object-contain"
				/>
				<div className="text-center flex flex-col gap-2">
					<h2
						className={`${opensans700.className} text-2xl md:text-4xl text-[#3B9FE5]`}>
						{sponsor.name}
					</h2>
					<p
						className={`${poppins600.className} text-sm md:text-base text-[#1FBEB6]`}>
						{sponsor.headline}
					</p>
				</div>
				{sponsor.description && (
					<p className="text-xs md:text-sm text-[#2C3E50] text-center max-w-2xl leading-relaxed">
						{sponsor.description}
					</p>
				)}
				<div className="flex flex-wrap gap-2 justify-center">
					{sponsor.badges.map((badge) => {
						const BadgeComponent =
							badgeComponentMap[badge as keyof typeof badgeComponentMap];
						return BadgeComponent ? <BadgeComponent key={badge} /> : null;
					})}
				</div>
			</div>
		);
	}

	return (
		<div
			className={`w-full max-w-sm flex flex-col rounded-2xl p-4 md:p-6 gap-3 shadow-md hover:shadow-lg transition-shadow duration-300 ${
				isPlatinum
					? "bg-gradient-to-br from-white to-[#E8F5FC] border border-[#7EC8E3]"
					: isGold
						? "bg-white border border-[#E8F5FC]"
						: "bg-white"
			}`}>
			<div className="flex justify-center">
				<img
					src={sponsor.primaryLogo}
					alt={sponsor.name}
					className={`object-contain ${
						isPlatinum
							? "h-24 md:h-32"
							: isGold
								? "h-20 md:h-24"
								: "h-16 md:h-20"
					}`}
				/>
			</div>

			<div className="flex flex-col gap-1">
				<h3
					className={`${opensans700.className} text-base md:text-lg text-[#3B9FE5] text-center`}>
					{sponsor.name}
				</h3>
				<p
					className={`${poppins600.className} text-xs md:text-sm text-[#1FBEB6] text-center`}>
					{sponsor.headline}
				</p>
			</div>

			{(isPlatinum || isGold) && sponsor.description && (
				<p className="text-xs md:text-sm text-[#2C3E50] text-center leading-relaxed">
					{sponsor.description}
				</p>
			)}

			{isPlatinum &&
				sponsor.carouselImages &&
				sponsor.carouselImages.length > 0 && (
					<div className="mt-2">
						<Carousel opts={{ loop: true }} className="w-full">
							<CarouselContent>
								{sponsor.carouselImages.map((image, idx) => (
									<CarouselItem key={idx} className="basis-full">
										<img
											src={image}
											alt={`${sponsor.name} image ${idx + 1}`}
											className="w-full h-32 md:h-40 object-cover rounded-lg"
										/>
									</CarouselItem>
								))}
							</CarouselContent>
						</Carousel>
					</div>
				)}

			<div className="flex flex-wrap gap-1 justify-center pt-2">
				{sponsor.badges.map((badge) => {
					const BadgeComponent =
						badgeComponentMap[badge as keyof typeof badgeComponentMap];
					return BadgeComponent ? <BadgeComponent key={badge} /> : null;
				})}
			</div>
		</div>
	);
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
