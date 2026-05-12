import { TM } from "@/src/lib/about/tm";
import { getTask } from "@/src/lib/about/task";
import { Task } from "./task";
import { poppins600, opensans700 } from "@/src/ui/fonts";

export function SingleTeamMbr({ tm }: { tm: TM }) {
	const tasks = tm.taskIds
		.map((taskId) => getTask(parseInt(taskId)))
		.filter((task) => task !== undefined);

	return (
		<div className="w-full max-w-sm flex flex-col bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
			<div className="flex flex-row relative w-full items-center justify-center pt-full mt-5">
				<img
					src={tm.portrait.imageRef}
					alt={tm.name}
					className="h-64 md:h-80 object-cover"
				/>
			</div>

			<div className="p-4 md:p-6 flex flex-col gap-3">
				<div>
					<h3
						className={`${opensans700.className} text-lg md:text-xl text-[#3B9FE5]`}>
						{tm.name}
					</h3>
					<p
						className={`${poppins600.className} text-xs md:text-sm text-[#1FBEB6] mt-1`}>
						{tm.role}
					</p>
				</div>

				<p className="text-xs md:text-sm text-[#2C3E50] leading-relaxed">
					{tm.description}
				</p>

				{tasks.length > 0 && (
					<div className="pt-2 md:pt-4 border-t border-[#E8F5FC]">
						<h4
							className={`${poppins600.className} text-xs md:text-sm text-[#2C3E50] mb-2 md:mb-3`}>
							Tasks & Responsibilities
						</h4>
						<div className="flex flex-col gap-2">
							{tasks.map((task) => (
								<Task key={task?.id} task={task!} />
							))}
						</div>
					</div>
				)}
			</div>
		</div>
	);
}
