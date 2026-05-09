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
	tier: "platinum" | "gold" | "silver" | "other";
}) {
	const isPlatinum = tier === "platinum";
	const isGold = tier === "gold";

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
					src={sponsor.primaryLogo.imageRef}
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
					<div className="flex flex-col gap-4 md:gap-6 items-center">
						<div className="w-full flex flex-col gap-4 md:gap-8 items-center bg-gradient-to-br from-[#3B9FE5]/10 to-[#1FBEB6]/10 rounded-3xl p-6 md:p-12 border-2 border-[#3B9FE5]/30">
							<div className="w-full max-w-2xl">
								<Carousel
									opts={{
										align: "center",
										loop: true,
									}}
									className="w-full">
									<div className="relative">
										<CarouselContent>
											{sponsors.main.carouselImages &&
											sponsors.main.carouselImages.length > 0 ? (
												sponsors.main.carouselImages.map((image, idx) => (
													<CarouselItem key={idx} className="basis-full">
														<img
															src={image.imageRef}
															alt={`${sponsors.main.name} image ${idx + 1}`}
															className="w-full h-48 md:h-64 object-cover rounded-xl"
														/>
													</CarouselItem>
												))
											) : (
												<CarouselItem className="basis-full">
													<img
														src={sponsors.main.primaryLogo.imageRef}
														alt={sponsors.main.name}
														className="w-full h-48 md:h-64 object-contain rounded-xl"
													/>
												</CarouselItem>
											)}
										</CarouselContent>

										{sponsors.main.carouselImages &&
											sponsors.main.carouselImages.length > 1 && (
												<>
													<div className="hidden md:flex justify-between absolute -left-14 -right-14 top-1/2 -translate-y-1/2 pointer-events-none">
														<CarouselPrevious className="relative left-0 translate-y-0 pointer-events-auto bg-[#3B9FE5] hover:bg-[#7EC8E3] text-white border-none shadow-md w-8 h-8" />
														<CarouselNext className="relative right-0 translate-y-0 pointer-events-auto bg-[#3B9FE5] hover:bg-[#7EC8E3] text-white border-none shadow-md w-8 h-8" />
													</div>

													<div className="flex md:hidden justify-center gap-4 mt-4">
														<CarouselPrevious className="relative left-0 translate-y-0 bg-[#3B9FE5] hover:bg-[#7EC8E3] text-white border-none shadow-md w-8 h-8" />
														<CarouselNext className="relative right-0 translate-y-0 bg-[#3B9FE5] hover:bg-[#7EC8E3] text-white border-none shadow-md w-8 h-8" />
													</div>
												</>
											)}
									</div>
								</Carousel>
							</div>

							<div className="text-center flex flex-col gap-2">
								<h2
									className={`${opensans700.className} text-2xl md:text-4xl text-[#3B9FE5]`}>
									{sponsors.main.name}
								</h2>
								<p
									className={`${poppins600.className} text-sm md:text-base text-[#1FBEB6]`}>
									{sponsors.main.headline}
								</p>
							</div>
							{sponsors.main.description && (
								<p className="text-xs md:text-sm text-[#2C3E50] text-center max-w-2xl leading-relaxed">
									{sponsors.main.description}
								</p>
							)}
							<div className="flex flex-wrap gap-2 justify-center">
								{sponsors.main.badges.map((badge) => {
									const BadgeComponent =
										badgeComponentMap[badge as keyof typeof badgeComponentMap];
									return BadgeComponent ? <BadgeComponent key={badge} /> : null;
								})}
							</div>
						</div>
					</div>

					{sponsors.platinum.length > 0 && (
						<div className="flex flex-col gap-4">
							<div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 justify-items-center">
								{sponsors.platinum.map((sponsor) => (
									<div key={sponsor.id} className="w-full max-w-sm">
										<SponsorCard sponsor={sponsor} tier="platinum" />
									</div>
								))}
							</div>
						</div>
					)}

					{sponsors.gold.length > 0 && (
						<div className="flex flex-col gap-4">
							<div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 justify-items-center">
								{sponsors.gold.map((sponsor) => (
									<div key={sponsor.id} className="w-full max-w-sm">
										<SponsorCard sponsor={sponsor} tier="gold" />
									</div>
								))}
							</div>
						</div>
					)}

					{sponsors.silver.length > 0 && (
						<div className="flex flex-col gap-4">
							<div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 justify-items-center">
								{sponsors.silver.map((sponsor) => (
									<div key={sponsor.id} className="w-full max-w-sm">
										<SponsorCard sponsor={sponsor} tier="silver" />
									</div>
								))}
							</div>
						</div>
					)}

					{sponsors.others.length > 0 && (
						<div className="flex flex-col gap-4">
							<div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 justify-items-center">
								{sponsors.others.map((sponsor) => (
									<div key={sponsor.id} className="w-full max-w-sm">
										<SponsorCard sponsor={sponsor} tier="other" />
									</div>
								))}
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
