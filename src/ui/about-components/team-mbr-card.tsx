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

export function TMCard({ teamMember }: { teamMember: TMtype }) {
  return (
    <>
      <div>
        <Card>
          <CardTitle>{teamMember.name.toUpperCase()}</CardTitle>
          <CardContent>
            {/*add image*/}
            <CardHeader>{teamMember.position}</CardHeader>
            <CardDescription>{teamMember.description}</CardDescription>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
