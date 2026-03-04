import { sponsorType } from "@/src/lib/sponsor";

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

export { PlatinumSponsor, SecondarySponsor, Tier3Sponsor, OtherSponsor };
