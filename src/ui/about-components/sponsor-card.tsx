"use client";

import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from "@/src/components/carousel";

import { Sponsor } from "@/src/lib/about/sponsor";

import {
	EngineeringSupportBadge,
	TechnicalSupportBadge,
	FinancialSupportBadge,
	MediaPartnerBadge,
	UniformPartnerBadge,
	OtherSupportBadge,
} from "@/src/ui/badges";
import { poppins600, opensans700 } from "@/src/ui/fonts";

const badgeComponentMap = {
	"engineering support": EngineeringSupportBadge,
	"technical support": TechnicalSupportBadge,
	"financial support": FinancialSupportBadge,
	"media partner": MediaPartnerBadge,
	"uniform partner": UniformPartnerBadge,
	other: OtherSupportBadge,
};

export function SponsorCard({
	sponsor,
	tier,
}: {
	sponsor: Sponsor;
	tier: "main" | "platinum" | "gold" | "silver" | "other";
}) {
	const isMainTier = tier === "main";
	const isPlatinum = tier === "platinum";
	const isGold = tier === "gold";

	if (isMainTier) {
		return (
			<div className="w-full flex flex-col gap-4 md:gap-8 items-center bg-gradient-to-br from-[#3B9FE5]/10 to-[#1FBEB6]/10 rounded-3xl p-6 md:p-12 border-2 border-[#3B9FE5]/30">
				<img
					src={sponsor.primaryLogo.imageRef}
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

			{isPlatinum &&
				sponsor.carouselImages &&
				sponsor.carouselImages.length > 0 && (
					<div className="mt-2">
						<Carousel opts={{ loop: true }} className="w-full">
							<CarouselContent>
								{sponsor.carouselImages.map((image, idx) => (
									<CarouselItem key={idx} className="basis-full">
										<img
											src={image.imageRef}
											alt={`${sponsor.name} image ${idx + 1}`}
											className="w-full h-32 md:h-40 object-cover rounded-lg"
										/>
									</CarouselItem>
								))}
							</CarouselContent>
						</Carousel>
					</div>
				)}
		</div>
	);
}
