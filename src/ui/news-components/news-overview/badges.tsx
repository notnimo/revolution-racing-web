import { Badge } from "@/src/components/badge";

function CompetitionBadge() {
  return <Badge className="bg-orange-950 text-orange-300">Competition</Badge>;
}

function SponsorBadge() {
  return <Badge className="bg-blue-950 text-blue-300">Sponsor</Badge>;
}

function EventBadge() {
  return <Badge className="bg-green-950 text-green-300">Event</Badge>;
}

function DevelopmentBadge() {
  return <Badge className="bg-sky-950 text-sky-300">Development</Badge>;
}

function OtherBadge() {
  return <Badge className="bg-gray-950 text-gray-300">Other</Badge>;
}

function TeamBadge() {
  return <Badge className="bg-purple-950 text-purple-300">Team</Badge>;
}

export {
  CompetitionBadge,
  SponsorBadge,
  EventBadge,
  DevelopmentBadge,
  OtherBadge,
  TeamBadge,
};
