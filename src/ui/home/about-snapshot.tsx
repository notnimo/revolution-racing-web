import { StemRacingOverview } from "@/src/ui/about-components/overview-components/stem-racing-overview";
import { TeamOverview } from "@/src/ui/about-components/overview-components/team-overview";
import { SponsorOverview } from "@/src/ui/about-components/overview-components/sponsor-overview";
import { sponsorType } from "@/src/lib/sponsor-type";

export function AboutSnapshot() {
  const sponsorsList: Record<string, sponsorType> = {
    hyperion: {},
    mitor: {},
    comuneGiaveno: {},
    pascal: {},
    poliTo: {},
  };
  return (
    <div className="w-screen h-fit ">
      <div className="flex flex-col md:flex-row">
        <StemRacingOverview />
        <hr className="md:hidden" />
        <div className="hidden md:block w-1.5 h-screen bg-neutral-quaternary border-3 rounded-sm" />
        <TeamOverview />
      </div>
      <hr />
      <SponsorOverview sponsors={sponsorsList} />
    </div>
  );
}
