import { default as tmRawData } from "@/src/lib/about/data/tm.json";

import { ImageRef } from "@/src/lib/imageRef";
import { positionOptions } from "@/src/lib/home/team-members";

type Task = {
	title: string;
	photo: string;
};

type TM = {
	id: number;
	name: string;
	role: positionOptions;
	portrait: ImageRef<`/team-members/${string}.png`>;
	description: string;
	involvement: Task[];
};

function getTMs(): TM[] {
	let tmData: TM[] = [];
	Object.values(tmRawData).forEach((tm) => tmData.push(tm as TM));
	return tmData;
}

function getTM(name: string): TM | undefined {
	const tms = getTMs();
	return tms.find((tm) => tm.name === name);
}

export type { TM, Task };
export { getTMs, getTM };
