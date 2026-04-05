import { default as rawTeamMembersData } from "@/src/lib/data/team-members.json";

const positionOptList = [
	"Project Manager",
	"Design Engineer",
	"Manufacturing Engineer",
	"Graphic Designer",
	"Resource Manager",
	"Web Developer",
] as const;
type positionOptions = (typeof positionOptList)[number];
type ImageType<T> = {
	imageRef: T;
	altText?: string;
};
type TMtype = {
	id: number;
	name: string;
	position: positionOptions;
	image: ImageType<`/team-members/${string}.png`>;
	description: string;
};

let teamMembersData: TMtype[] = [];
Object.values(rawTeamMembersData).forEach((tm) =>
	teamMembersData.push(tm as TMtype),
);

export type { TMtype, ImageType };
export { teamMembersData };
