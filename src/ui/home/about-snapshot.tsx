import { StemRacingOverview } from "@/src/ui/about-components/overview-components/stem-racing-overview";
import { TeamOverview } from "@/src/ui/about-components/overview-components/team-overview";
import { SponsorOverview } from "@/src/ui/about-components/overview-components/sponsor-overview";
import { sponsorPack, sponsorsList } from "@/src/lib/home/sponsor";
import { teamMembersData } from "@/src/lib/home/team-members";

export function AboutSnapshot() {
	return (
		<div className="w-screen h-fit flex flex-col gap-6 bg-[#E8F5FC] p-4 md:p-10">
			<TeamOverview teamMembers={teamMembersData} />
			<hr className="border-t-[1px] border-[#7EC8E3]/50" />
			<StemRacingOverview />
			<hr className="border-t-[1px] border-[#7EC8E3]/50" />
			<SponsorOverview sponsors={sponsorsList} />
		</div>
	);
}
