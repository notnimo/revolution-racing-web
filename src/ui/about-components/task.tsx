import type { Task } from "@/src/lib/about/task";
import { poppins600 } from "@/src/ui/fonts";

export function Task({ task }: { task: Task }) {
	return (
		<div className="flex items-center gap-2 w-full">
			<div
				className="w-2 h-2 md:w-3 md:h-3 rounded-full flex-shrink-0"
				style={{ backgroundColor: task.color }}
			/>
			<div className="flex-1">
				<h4
					className={`${poppins600.className} text-xs md:text-sm text-[#3B9FE5]`}>
					{task.title}
				</h4>
				<p className="text-xs md:text-sm text-[#2C3E50]/75 mt-0.5">
					{task.description}
				</p>
			</div>
		</div>
	);
}
