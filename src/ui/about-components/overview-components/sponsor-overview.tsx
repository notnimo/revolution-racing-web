import { sponsorPack, Sponsor } from "@/src/lib/sponsor";
import { SingleSponsor } from "@/src/ui/about-components/overview-components/single-sponsor";

export function SponsorOverview({ sponsors }: { sponsors: sponsorPack }) {
	return (
		<section className="fade-in-section w-full p-4 md:p-8">
			<h1 className="text-3xl md:text-4xl font-bold text-[#3B9FE5] mb-4">
				Our Sponsors
			</h1>

			<div className="grid grid-cols-1 gap-4 mb-6">
				{sponsors.primary?.map((sponsor) => (
					<SingleSponsor key={sponsor.id} level="platinum" sponsor={sponsor} />
				))}
			</div>

			<div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
				{sponsors.secondary?.map((sponsor) => (
					<SingleSponsor key={sponsor.id} level="gold" sponsor={sponsor} />
				))}
			</div>

			<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
				{sponsors.tier3?.map((sponsor) => (
					<SingleSponsor key={sponsor.id} level="tier3" sponsor={sponsor} />
				))}
			</div>

			<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
				{sponsors.others?.map((sponsor) => (
					<SingleSponsor key={sponsor.id} level="other" sponsor={sponsor} />
				))}
			</div>
		</section>
	);
}
