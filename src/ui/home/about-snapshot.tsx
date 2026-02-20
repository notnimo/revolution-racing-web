import { StemRacingOverview } from "@/src/ui/about-components/stem-racing-overview";
import { TeamOverview } from "@/src/ui/about-components/team-overview";

export function AboutSnapshot() {
  return (
    <div className="w-screen h-fit">
      <div className="flex flex-col md:flex-row">
        <StemRacingOverview />
        <hr className="md:hidden" />
        <div className="hidden md:block w-1.5 h-150 bg-neutral-quaternary border-3 rounded-sm" />
        <TeamOverview />
      </div>
    </div>
  );
}
