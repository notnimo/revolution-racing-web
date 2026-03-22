import { ArrowRight } from "lucide-react";

import { statsData } from "@/src/lib/stats";

import { NumberSection } from "@/src/ui/news-components/news-overview/number-section";
import { open_sans } from "@/src/ui/fonts";

export function StatsSection() {
	return (
		<div className="w-screen">
			<div className="flex flex-row items-center justify-center gap-3">
				<h1>Stats Section</h1>
				<h2>Some of the numbers that tell our story</h2>
				<a href="/projects">
					<div className="flex flex-row w-fit h-fit items-center justify-center">
						<ArrowRight />
						<h3 className={open_sans.className}>More of Our Projects</h3>
					</div>
				</a>
			</div>
			<NumberSection stats={statsData} />
		</div>
	);
}
