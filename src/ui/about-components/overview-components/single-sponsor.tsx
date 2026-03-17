import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/src/components/card";

import { poppins, inter500 } from "@/src/ui/fonts";

import { sponsorType } from "@/src/lib/sponsor";

function PlatinumSponsor({ sponsor }: { sponsor: sponsorType }) {
  return (
    <div>
      <div className="w-fit h-fit">
        <Card>
          <CardContent className="flex flex-col items-center justify-around">
            <CardTitle className={`${poppins.className} antialiased p-1.5 m-1`}>
              {sponsor.sponsorName.toUpperCase()}
            </CardTitle>
            <img
              src={sponsor.image.imageRef}
              alt={`${sponsor.sponsorName}'s card picture`}
              className="rounded-md grow w-75"
            />
            <CardHeader className={`${poppins.className} antialiased`}>
              {sponsor.header}
            </CardHeader>
            <CardDescription
              className={`${inter500.className} antialiased hidden md:inline max-w-50`}>
              {sponsor.description}
            </CardDescription>
            <CardFooter>{}</CardFooter>
          </CardContent>
        </Card>
      </div>
    </div>
  );
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
