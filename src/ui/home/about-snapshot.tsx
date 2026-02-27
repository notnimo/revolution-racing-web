import { StemRacingOverview } from "@/src/ui/about-components/overview-components/stem-racing-overview";
import { TeamOverview } from "@/src/ui/about-components/overview-components/team-overview";
import { SponsorOverview } from "@/src/ui/about-components/overview-components/sponsor-overview";
import { sponsorPack, sponsorType } from "@/src/lib/sponsor-type";

export function AboutSnapshot() {
  const famar: sponsorType = {
    sponsorName: "Famar",
    description: "",
    imagePath: "/sponsor/FAMAR/famar.png",
  };
  const hyperion: sponsorType = {
    sponsorName: "Hyperion",
    description: "",
    imagePath: "/sponsor/hyperion/hyperion-black.png",
  };
  const mitor: sponsorType = {
    sponsorName: "Mitor",
    description: "",
    imagePath: "/sponsor/mitor/mitor-logo.png",
  };
  const comuneGiaveno: sponsorType = {
    sponsorName: "Comune di Giaveno",
    description: "",
    imagePath: "/sponsor/giaveno/giaveno.png",
  };
  const pascal: sponsorType = {
    sponsorName: "ISS Blaise Pascal",
    description: "",
    imagePath: "/sponsor/Pascal/pascal.png",
  };
  const poliTo: sponsorType = {
    sponsorName: "Squadra Corse PoliTo",
    description: "",
    imagePath: "/sponsor/poliTo/poli-white-logo.png",
  };

  const sponsorsList: sponsorPack = {
    primary: famar,
    secondary: { hyperion },
    tier3: { mitor },
    others: { comuneGiaveno, pascal, poliTo },
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
