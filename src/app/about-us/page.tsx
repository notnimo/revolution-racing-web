import { SponsorShowcase } from "@/src/ui/about-components/sponsor-showcase";
import { TeamMembersShowcase } from "@/src/ui/about-components/team-mbrs-showcase";
import { TeamPresentation } from "@/src/ui/about-components/team-presentation";

export default function Page() {
	return (
		<div>
			<TeamPresentation />
			<hr className="border-t-[1px] border-[#7EC8E3]/50" />
			<TeamMembersShowcase />
			<hr className="border-t-[1px] border-[#7EC8E3]/50" />
			<SponsorShowcase />
		</div>
	);
}
