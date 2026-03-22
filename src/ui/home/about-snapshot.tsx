import { StemRacingOverview } from "@/src/ui/about-components/overview-components/stem-racing-overview";
import { TeamOverview } from "@/src/ui/about-components/overview-components/team-overview";
import { SponsorOverview } from "@/src/ui/about-components/overview-components/sponsor-overview";
import {
	sponsorPack,
	famar,
	hyperion,
	mitor,
	centroServizi,
	comuneGiaveno,
	pascal,
	poliTo,
} from "@/src/lib/sponsor";
import {
	tm1,
	tm2,
	tm3,
	tm4,
	tm5,
	tm6,
	tm7,
	tm8,
	TMtype,
} from "@/src/lib/team-members";

export function AboutSnapshot() {
	const sponsorsList: sponsorPack = {
		primary: [famar],
		secondary: [hyperion],
		tier3: [mitor, centroServizi],
		others: [comuneGiaveno, pascal, poliTo],
	};
	const teamMembersList: TMtype[] = [tm1, tm2, tm3, tm4, tm5, tm6, tm7, tm8];

	return (
		<div className="w-screen h-fit flex flex-col gap-6 bg-[#E8F5FC] p-4 md:p-10">
			<TeamOverview teamMembers={teamMembersList} />
			<hr className="border-t-[1px] border-[#7EC8E3]/50" />
			<StemRacingOverview />
			<hr className="border-t-[1px] border-[#7EC8E3]/50" />
			<SponsorOverview sponsors={sponsorsList} />
		</div>
	);
}
