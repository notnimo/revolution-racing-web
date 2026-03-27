import { sponsorPack, Sponsor } from "@/src/lib/sponsor";
import { SingleSponsor } from "@/src/ui/about-components/overview-components/single-sponsor";

export function SponsorOverview({ sponsors }: { sponsors: sponsorPack }) {
	return (
		<section className="fade-in-section w-full p-4 md:p-8">
			<div className="flex flex-col md:flex-row items-center w-full text-center justify-center border border-[#E8F5FC] rounded-2xl p-4 md:p-6 gap-3 bg-white mb-3">
				<div>
					<h1 className="text-3xl md:text-4xl font-bold text-[#3B9FE5]">
						Our Sponsors
					</h1>
					<h2 className="text-[#2C3E50]">
						We are grateful for the support of our sponsors who make our journey
						possible
					</h2>
				</div>
			</div>

			<div className="grid grid-cols-1 gap-4 mb-6">
				{sponsors.primary?.map((sponsor) => (
					<SingleSponsor key={sponsor.id} level="platinum" sponsor={sponsor} />
				))}
			</div>

			<div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-6">
				{sponsors.secondary?.map((sponsor) => (
					<div key={sponsor.id} className="w-full md:w-1/2">
						<SingleSponsor level="gold" sponsor={sponsor} />
					</div>
				))}
			</div>

			<div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-6">
				{sponsors.tier3?.map((sponsor) => (
					<div key={sponsor.id} className="w-full md:w-1/3">
						<SingleSponsor key={sponsor.id} level="tier3" sponsor={sponsor} />
					</div>
				))}
			</div>

			<div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-6">
				{sponsors.others?.map((sponsor) => (
					<div key={sponsor.id} className="w-full md:w-1/4">
						<SingleSponsor key={sponsor.id} level="other" sponsor={sponsor} />
					</div>
				))}
			</div>
		</section>
	);
}
