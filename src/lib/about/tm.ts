import { ImageRef } from "@/src/lib/imageRef";
import { positionOptions } from "@/src/lib/home/team-members";

type Task = {
	title: string;
	photo: string;
};

type TM = {
	id: number;
	role: positionOptions;
	portrait: ImageRef<`/team-members/${string}.png`>;
	description: string;
	involvement: Task[];
};

function getTM(): TM[] {
	return [];
}

export type { TM, Task };
