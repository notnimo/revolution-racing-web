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
  TMtype,
} from "@/src/lib/team-members";

export function AboutSnapshot() {
  const sponsorsList: sponsorPack = {
    primary: famar,
    secondary: { hyperion },
    tier3: { mitor, centroServizi },
    others: { comuneGiaveno, pascal, poliTo },
  };
  const teamMembersList: TMtype[] = [tm1, tm2, tm3, tm4, tm5, tm6, tm7];

  return (
    <div className="w-screen h-fit ">
      <div className="flex flex-col md:flex-row">
        <StemRacingOverview />
        <hr className="md:hidden" />
        <div className="hidden md:block w-1.5 h-screen bg-neutral-quaternary border-3 rounded-sm" />
        <TeamOverview teamMembers={teamMembersList} />
      </div>
      <hr />
      <SponsorOverview sponsors={sponsorsList} />
    </div>
  );
}
