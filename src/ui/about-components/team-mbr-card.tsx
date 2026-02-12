import Image from "next/image";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/src/components/card";

import { TMtype } from "@/src/lib/team-members";
import { poppins, inter500 } from "@/src/ui/fonts";
import "@/public/foo.jpg";

export function TMCard({ teamMember }: { teamMember: TMtype }) {
  return (
    <>
      <div className="w-full h-full">
        <Card className="flex flex-col items-center">
          <CardTitle className={`${poppins.className} antialiased`}>
            {teamMember.name.toUpperCase()}
          </CardTitle>
          <CardContent className="flex flex-col items-center">
            <Image
              src={teamMember.image.imageRef}
              className="rounded-md"
              alt={`${teamMember.name}'s card picture`}
              width={teamMember.image.width}
              height={teamMember.image.height}
            />
            <CardHeader className={`${poppins.className} antialiased`}>
              {teamMember.position}
            </CardHeader>
            <CardDescription className={`${inter500.className} antialiased`}>
              {teamMember.description}
            </CardDescription>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
