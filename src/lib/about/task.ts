import { default as taskRawData } from "@/src/lib/about/data/tasks.json";

const TaskOptList = [
	"CAD Design",
	"Car Assembly",
	"Car Launch",
	"Sponsorship Managing",
	"Sample Track Building",
	"Testing and Data Analysis",
	"Marketing and Social Media",
	"Graphic Design",
	"Team Management",
	"Web Development",
	"Sustainability Research and Implementation",
] as const;
type TaskOpt = (typeof TaskOptList)[number];

type Task = {
	id: number;
	title: TaskOpt;
	description: string;
	color: string;
};

function getTasks(): Task[] {
	let taskData: Task[] = [];
	Object.values(taskRawData).forEach((task) => taskData.push(task as Task));
	return taskData;
}

function getTask(title: TaskOpt): Task | undefined {
	const tasks = getTasks();
	return tasks.find((task) => task.title === title);
}

export type { Task, TaskOpt };
export { getTasks, getTask };
