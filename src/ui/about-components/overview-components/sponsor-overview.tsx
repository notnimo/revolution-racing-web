import { sponsorPack, sponsorType } from "@/src/lib/sponsor";
import {
  PlatinumSponsor,
  SecondarySponsor,
  Tier3Sponsor,
  OtherSponsor,
} from "@/src/ui/about-components/overview-components/single-sponsor";

export function SponsorOverview({ sponsors }: { sponsors: sponsorPack }) {
  return (
    <div>
      <h1>Our Sponsors</h1>
      <div>
        <PlatinumSponsor sponsor={sponsors.primary} />
      </div>
      <div>
        {Object.values(sponsors.secondary) &&
          Object.values(sponsors.secondary).map((sponsor) => (
            <SecondarySponsor sponsor={sponsor} />
          ))}
      </div>
      <div>
        {Object.values(sponsors.tier3) &&
          Object.values(sponsors.tier3).map((sponsor) => (
            <Tier3Sponsor sponsor={sponsor} />
          ))}
      </div>
      <div>
        {Object.values(sponsors.others) &&
          Object.values(sponsors.others).map((sponsor) => (
            <OtherSponsor sponsor={sponsor} />
          ))}
      </div>
    </div>
  );
}
