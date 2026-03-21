import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/src/components/card";

import { poppins, inter500 } from "@/src/ui/fonts";

import { Sponsor } from "@/src/lib/sponsor";
import { matchIcon } from "@/src/lib/contacts";

function SingleSponsor({
  sponsor,
  level,
}: {
  sponsor: Sponsor;
  level: string;
}) {
  return (
    <Card className="w-fit h-fit">
      <CardContent className="flex flex-col items-center justify-around">
        <CardTitle className={`${poppins.className} antialiased p-1.5 m-1`}>
          {sponsor.sponsorName.toUpperCase()}
        </CardTitle>
        <img
          src={sponsor.image.imageRef}
          alt={`${sponsor.sponsorName}'s card picture`}
          className="rounded-md grow w-75"
        />
        {level === "platinum" || level === "gold" || level === "tier3" ? (
          <CardHeader className={`${poppins.className} antialiased`}>
            {sponsor.header}
          </CardHeader>
        ) : (
          <div className="hidden" />
        )}
        {level === "platinum" ? (
          <CardDescription
            className={`${inter500.className} antialiased hidden md:inline max-w-50`}>
            {sponsor.description}
          </CardDescription>
        ) : (
          <div className="hidden" />
        )}
        <CardFooter>
          <div className="flex flex-row items-center justify-center">
            {Object.values(sponsor.contactSocials) &&
              Object.values(sponsor.contactSocials).map((contact) => {
                const Icon = matchIcon[contact.type];
                return (
                  <a
                    key={contact.href}
                    href={contact.href}
                    target="_blank"
                    rel="noopener noreferrer">
                    <Icon />
                  </a>
                );
              })}
          </div>
        </CardFooter>
      </CardContent>
    </Card>
  );
}
export { SingleSponsor };
