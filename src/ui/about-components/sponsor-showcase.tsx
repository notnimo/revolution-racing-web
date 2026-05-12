"use client";

import { Sponsor, SponsorPack } from "@/src/lib/about/sponsor";

import { poppins600, opensans700 } from "@/src/ui/fonts";
import {
	EngineeringSupportBadge,
	TechnicalSupportBadge,
	FinancialSupportBadge,
	MediaPartnerBadge,
	UniformPartnerBadge,
	OtherSupportBadge,
} from "@/src/ui/badges";
import { SponsorCard } from "@/src/ui/about-components/sponsor-card";

const badgeComponentMap = {
	"engineering support": EngineeringSupportBadge,
	"technical support": TechnicalSupportBadge,
	"financial support": FinancialSupportBadge,
	"media partner": MediaPartnerBadge,
	"uniform partner": UniformPartnerBadge,
	other: OtherSupportBadge,
};

const CARD_HEIGHTS = {
	platinum: "min-h-96 md:min-h-96",
	gold: "min-h-80 md:h-98",
	silver: "min-h-72 md:h-90",
	other: "min-h-72 md:min-h-72",
} as const;

interface SponsorShowcaseProps {
	sponsors: SponsorPack;
}

export function SponsorShowcase({ sponsors }: SponsorShowcaseProps) {
	return (
		<div className="w-screen max-w-full px-4 md:px-8 py-8 md:py-16 bg-[#E8F5FC]">
			<div className="flex flex-col gap-6 md:gap-12 max-w-7xl mx-auto">
				<h2
					className={`${poppins600.className} text-2xl md:text-4xl text-[#3B9FE5] text-center`}>
					Our Sponsors
				</h2>

				<div className="flex flex-col gap-8 md:gap-12">
					<SponsorCard sponsor={sponsors.main} tier="main" />

					{sponsors.platinum.length > 0 && (
						<div className="flex flex-wrap justify-center gap-4 md:gap-6 w-full">
							{sponsors.platinum.map((sponsor) => (
								<div
									key={sponsor.id}
									className={`basis-full md:basis-1/2 h-full ${CARD_HEIGHTS.platinum}`}>
									<SponsorCard sponsor={sponsor} tier="platinum" />
								</div>
							))}
						</div>
					)}

					{sponsors.gold.length > 0 && (
						<div className="flex flex-wrap justify-center gap-4 md:gap-6 w-full">
							{sponsors.gold.map((sponsor) => (
								<div
									key={sponsor.id}
									className={`basis-full md:basis-1/3 h-full ${CARD_HEIGHTS.gold}`}>
									<SponsorCard sponsor={sponsor} tier="gold" />
								</div>
							))}
						</div>
					)}

					{sponsors.silver.length > 0 && (
						<div className="flex flex-wrap justify-center gap-4 md:gap-6 w-full">
							{sponsors.silver.map((sponsor) => (
								<div
									key={sponsor.id}
									className={`basis-full md:basis-1/4 h-full ${CARD_HEIGHTS.silver}`}>
									<SponsorCard sponsor={sponsor} tier="silver" />
								</div>
							))}
						</div>
					)}

					{sponsors.others.length > 0 && (
						<div className="flex flex-wrap justify-center gap-4 md:gap-6 w-full">
							{sponsors.others.map((sponsor) => (
								<div
									key={sponsor.id}
									className={`basis-full md:basis-1/4 h-full ${CARD_HEIGHTS.other}`}>
									<SponsorCard sponsor={sponsor} tier="other" />
								</div>
							))}
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
