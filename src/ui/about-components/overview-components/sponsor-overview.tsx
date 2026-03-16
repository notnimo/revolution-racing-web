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
        {sponsors.primary &&
          sponsors.primary.map((sponsor) => (
            <PlatinumSponsor sponsor={sponsor} key={sponsor.id} />
          ))}
      </div>
      <div>
        {sponsors.secondary &&
          sponsors.secondary.map((sponsor) => (
            <SecondarySponsor sponsor={sponsor} key={sponsor.id} />
          ))}
      </div>
      <div>
        {sponsors.tier3 &&
          sponsors.tier3.map((sponsor) => (
            <Tier3Sponsor sponsor={sponsor} key={sponsor.id} />
          ))}
      </div>
      <div>
        {sponsors.others &&
          sponsors.others.map((sponsor) => (
            <OtherSponsor sponsor={sponsor} key={sponsor.id} />
          ))}
      </div>
    </div>
  );
}
