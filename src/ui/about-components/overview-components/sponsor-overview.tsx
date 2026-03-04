import { sponsorPack, sponsorType } from "@/src/lib/sponsor";

function PlatinumSponsor({ sponsor }: { sponsor: sponsorType }) {
  return <div>Platinum Sponsor</div>;
}

function SecondarySponsor({ sponsor }: { sponsor: sponsorType }) {
  return <div>Secondary Sponsor</div>;
}

function Tier3Sponsor({ sponsor }: { sponsor: sponsorType }) {
  return <div>Tier 3 Sponsor</div>;
}

function OtherSponsor({ sponsor }: { sponsor: sponsorType }) {
  return <div>Other Sponsor</div>;
}

export function SponsorOverview({ sponsors }: { sponsors: sponsorPack }) {
  return (
    <div>
      <h1>Our Sponsors</h1>
      <div>
        <PlatinumSponsor sponsor={sponsors.primary} />
      </div>
      <div>
        {Object.values(sponsors.secondary).map((sponsor) => (
          <SecondarySponsor sponsor={sponsor} />
        ))}
      </div>
      <div>
        {Object.values(sponsors.tier3).map((sponsor) => (
          <Tier3Sponsor sponsor={sponsor} />
        ))}
      </div>
      <div>
        {Object.values(sponsors.others).map((sponsor) => (
          <OtherSponsor sponsor={sponsor} />
        ))}
      </div>
    </div>
  );
}
