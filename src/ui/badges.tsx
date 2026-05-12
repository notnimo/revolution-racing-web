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

function EngineeringSupportBadge() {
	return (
		<Badge className="bg-indigo-50 text-indigo-700">Engineering Support</Badge>
	);
}

function TechnicalSupportBadge() {
	return <Badge className="bg-cyan-50 text-cyan-700">Technical Support</Badge>;
}

function FinancialSupportBadge() {
	return (
		<Badge className="bg-emerald-50 text-emerald-700">Financial Support</Badge>
	);
}

function MediaPartnerBadge() {
	return <Badge className="bg-yellow-50 text-yellow-700">Media Partner</Badge>;
}

function UniformPartnerBadge() {
	return <Badge className="bg-pink-50 text-pink-700">Uniform Partner</Badge>;
}

function OtherSupportBadge() {
	return <Badge className="bg-gray-50 text-gray-700">Other</Badge>;
}

export {
	CompetitionBadge,
	SponsorBadge,
	EventBadge,
	DevelopmentBadge,
	OtherBadge,
	TeamBadge,
	EngineeringSupportBadge,
	TechnicalSupportBadge,
	FinancialSupportBadge,
	MediaPartnerBadge,
	UniformPartnerBadge,
	OtherSupportBadge,
};
