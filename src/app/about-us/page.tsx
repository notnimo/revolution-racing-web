import { getTMs } from "@/src/lib/about/tm";
import { getSponsors } from "@/src/lib/about/sponsor";

import { SponsorShowcase } from "@/src/ui/about-components/sponsor-showcase";
import { TeamMembersShowcase } from "@/src/ui/about-components/team-mbrs-showcase";
import { TeamPresentation } from "@/src/ui/about-components/team-presentation";
import { opensans700 } from "@/src/ui/fonts";

export default function Page() {
	return (
		<div className="bg-white w-screen max-w-full flex flex-col justify-start items-center">
			<div className="w-full flex justify-center items-center pt-8 md:pt-16 pb-6 md:pb-12 bg-[#E8F5FC]">
				<div className="text-center px-4">
					<h1
						className={`${opensans700.className} text-3xl md:text-6xl font-bold text-[#3B9FE5] leading-tight`}>
						About Our Team
					</h1>
				</div>
			</div>

			<TeamPresentation />

			<div className="w-full border-b border-[#7EC8E3]/30" />

			<TeamMembersShowcase team={getTMs()} />

			<div className="w-full border-b border-[#7EC8E3]/30" />

			<SponsorShowcase sponsors={getSponsors()} />
		</div>
	);
}
