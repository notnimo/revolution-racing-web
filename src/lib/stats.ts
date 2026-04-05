import { default as rawStatsData } from "@/src/lib/data/stats.json";

import { ImageType } from "@/src/lib/team-members";

type Stat = {
	id: number;
	value: number;
	label: string;
	image?: ImageType<`/stats/${string}.png`>;
};

let statsData: Stat[] = [];
Object.values(rawStatsData).forEach((stat) => statsData.push(stat as Stat));

export { statsData, type Stat };
