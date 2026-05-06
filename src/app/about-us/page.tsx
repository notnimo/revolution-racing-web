import { getTMs } from "@/src/lib/about/tm";
import { getSponsors } from "@/src/lib/about/sponsor";

import { SponsorShowcase } from "@/src/ui/about-components/sponsor-showcase";
import { TeamMembersShowcase } from "@/src/ui/about-components/team-mbrs-showcase";
import { TeamPresentation } from "@/src/ui/about-components/team-presentation";

export default function Page() {
	return (
		<div className="bg-[#E8F5FC] w-screen flex flex-col justify-start items-center">
			<div className="w-fit items-center text-center border border-[#E8F5FC] rounded-2xl">
				<div className="text-3xl md:text-[6rem] font-bold text-[#3B9FE5]">
					About Our Team
				</div>
			</div>
			<TeamPresentation />
			<hr className="border-t-[1px] border-[#7EC8E3]/50" />
			<TeamMembersShowcase team={getTMs()} />
			<hr className="border-t-[1px] border-[#7EC8E3]/50" />
			<SponsorShowcase sponsors={getSponsors()} />
		</div>
	);
}
