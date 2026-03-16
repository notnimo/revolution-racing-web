import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/src/components/card";

import { TMtype } from "@/src/lib/team-members";
import { poppins, inter500 } from "@/src/ui/fonts";

export function TMCard({ teamMember }: { teamMember: TMtype }) {
  return (
    <>
      <div className="w-fit h-fit">
        <Card>
          <CardContent className="flex flex-col items-center justify-around">
            <CardTitle className={`${poppins.className} antialiased p-1.5 m-1`}>
              {teamMember.name.toUpperCase()}
            </CardTitle>
            <img
              src={teamMember.image.imageRef}
              alt={`${teamMember.name}'s card picture`}
              className="rounded-md grow w-75"
            />
            <CardHeader className={`${poppins.className} antialiased`}>
              {teamMember.position}
            </CardHeader>
            <CardDescription
              className={`${inter500.className} antialiased hidden md:inline max-w-50`}>
              {teamMember.description}
            </CardDescription>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
