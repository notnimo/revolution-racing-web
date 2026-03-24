import { Badge } from "@/src/components/badge";

function CompetitionBadge() {
	return <Badge className="bg-orange-50 text-orange-700">Competition</Badge>;
}

function SponsorBadge() {
	return <Badge className="bg-blue-50 text-blue-700">Sponsor</Badge>;
}

function EventBadge() {
	return <Badge className="bg-green-50 text-green-700">Event</Badge>;
}

function DevelopmentBadge() {
	return <Badge className="bg-sky-50 text-sky-700">Development</Badge>;
}

function OtherBadge() {
	return <Badge className="bg-gray-50 text-gray-700">Other</Badge>;
}

function TeamBadge() {
	return <Badge className="bg-purple-50 text-purple-700">Team</Badge>;
}

export {
	CompetitionBadge,
	SponsorBadge,
	EventBadge,
	DevelopmentBadge,
	OtherBadge,
	TeamBadge,
};
