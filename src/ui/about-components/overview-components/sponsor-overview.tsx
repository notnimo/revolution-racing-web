import { sponsorPack, sponsorType } from "@/src/lib/sponsor";
import { SingleSponsor } from "@/src/ui/about-components/overview-components/single-sponsor";

export function SponsorOverview({ sponsors }: { sponsors: sponsorPack }) {
  return (
    <div>
      <h1>Our Sponsors</h1>
      <div>
        {sponsors.primary &&
          sponsors.primary.map((sponsor) => (
            <SingleSponsor
              level="platinum"
              sponsor={sponsor}
              key={sponsor.id}
            />
          ))}
      </div>
      <div>
        {sponsors.secondary &&
          sponsors.secondary.map((sponsor) => (
            <SingleSponsor level="gold" sponsor={sponsor} key={sponsor.id} />
          ))}
      </div>
      <div>
        {sponsors.tier3 &&
          sponsors.tier3.map((sponsor) => (
            <SingleSponsor level="tier3" sponsor={sponsor} key={sponsor.id} />
          ))}
      </div>
      <div>
        {sponsors.others &&
          sponsors.others.map((sponsor) => (
            <SingleSponsor level="other" sponsor={sponsor} key={sponsor.id} />
          ))}
      </div>
    </div>
  );
}
