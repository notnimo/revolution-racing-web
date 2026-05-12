import { default as taskRawData } from "@/src/lib/about/data/tasks.json";

enum TaskOpt {
	// placeholder options
	"CAD Design",
	"Car Assembly",
	"Car Testing",
	"Car Launch",
}

type Task = {
	id: number;
	title: string;
	description: string;
	color: string;
};

function getTasks(): Task[] {
	let taskData: Task[] = [];
	Object.values(taskRawData).forEach((task) => taskData.push(task as Task));
	return taskData;
}

function getTask(id: number): Task | undefined {
	const tasks = getTasks();
	return tasks.find((task) => task.id === id);
}

export type { Task };
export { getTasks, getTask };
