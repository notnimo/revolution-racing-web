import { default as teamMembersData } from "@/src/lib/data/team-members.json";

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
type teamMembersPack = TMtype[];

// Team members data to change with real imported from json or something like that, for now it's hardcoded for testing purposes
const tm1: TMtype = {
	id: 0,
	name: "Gabriele di Giorgio",
	position: "Project Manager",
	image: {
		imageRef: "/team-members/foo2.png",
	},
	description: "Gabriele is our Project Manager.",
};
const tm2: TMtype = {
	id: 1,
	name: "Arturo Serpico",
	position: "Design Engineer",
	image: {
		imageRef: "/team-members/foo2.png",
	},
	description: "Arturo is our Head of the Engineering",
};
const tm3: TMtype = {
	id: 2,
	name: "Edoardo Bona",
	position: "Graphic Designer",
	image: {
		imageRef: "/team-members/foo2.png",
	},
	description: "Edoardo is our Graphic Designer.",
};
const tm4: TMtype = {
	id: 3,
	name: "Federico Ponti",
	position: "Design Engineer",
	image: {
		imageRef: "/team-members/foo2.png",
	},
	description: "Federico is one of our Design Engineers.",
};
const tm5: TMtype = {
	id: 4,
	name: "Sherine Cirigliano",
	position: "Design Engineer",
	image: {
		imageRef: "/team-members/foo2.png",
	},
	description: "Sherine is one of our Design Engineers.",
};
const tm6: TMtype = {
	id: 5,
	name: "Pietro Tranca",
	position: "Manufacturing Engineer",
	image: {
		imageRef: "/team-members/foo2.png",
	},
	description: "Pietro is one of our Manufacturing Engineers.",
};
const tm7: TMtype = {
	id: 6,
	name: "Damiano Livoni",
	position: "Web Developer",
	image: {
		imageRef: "/team-members/foo2.png",
	},
	description: "Damiano is our Web Developer.",
};
const tm8: TMtype = {
	id: 7,
	name: "Damiano Livoni",
	position: "Web Developer",
	image: {
		imageRef: "/team-members/foo2.png",
	},
	description: "Damiano is our Web Developer.",
};

export type { TMtype, teamMembersPack, ImageType };
export { tm1, tm2, tm3, tm4, tm5, tm6, tm7, tm8 };
