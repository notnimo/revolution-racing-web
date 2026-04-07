import { default as rawStatsData } from "@/src/lib/data/stats.json";

type Stat = {
	id: number;
	value: number;
	label: string;
};

let statsData: Stat[] = [];
Object.values(rawStatsData).forEach((stat) => statsData.push(stat as Stat));

export { statsData, type Stat };
