import { default as statsData } from "@/src/lib/data/stats.json";

import { ImageType } from "@/src/lib/team-members";

type Stat = {
	id: number;
	value: number;
	label: string;
	image?: ImageType<`/stats/${string}.png`>;
};

// Stats data to change with real imported from json or something like that, for now it's hardcoded for testing purposes
const statsData1: Stat[] = [
	{
		id: 0,
		value: 100,
		label: "Racers",
		image: { imageRef: `/stats/foo2.png` },
	},
	{
		id: 1,
		value: 50,
		label: "Teams",
		image: { imageRef: `/stats/foo2.png` },
	},
	{
		id: 2,
		value: 200,
		label: "Events",
	},
];

export { statsData1 as statsData, type Stat };
