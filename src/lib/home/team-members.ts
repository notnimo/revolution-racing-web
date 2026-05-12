import { default as rawTeamMembersData } from "@/src/lib/home/data/team-members.json";
import { ImageRef } from "@/src/lib/imageRef";

const positionOptList = [
	"Project Manager",
	"Design Engineer",
	"Manufacturing Engineer",
	"Graphic Designer",
	"Resource Manager",
	"Web Developer",
] as const;
type positionOptions = (typeof positionOptList)[number];
type TMtype = {
	id: number;
	name: string;
	position: positionOptions;
	image: ImageRef<`/team-members/${string}.png`>;
	description: string;
};

let teamMembersData: TMtype[] = [];
Object.values(rawTeamMembersData).forEach((tm) =>
	teamMembersData.push(tm as TMtype),
);

export type { TMtype, positionOptions };
export { teamMembersData };
