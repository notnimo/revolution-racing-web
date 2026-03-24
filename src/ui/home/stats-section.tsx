import { ArrowRight } from "lucide-react";

import { statsData } from "@/src/lib/stats";

import { NumberSection } from "@/src/ui/news-components/news-overview/number-section";
import { open_sans } from "@/src/ui/fonts";

export function StatsSection() {
	return (
		<section className="w-screen p-4 md:p-8 bg-[#f6fbff] fade-in-section">
			<div className="flex flex-col md:flex-row items-center justify-between border border-[#E8F5FC] rounded-2xl p-4 md:p-6 gap-3">
				<div>
					<h1 className="text-3xl md:text-4xl font-bold text-[#3B9FE5]">
						Stats Section
					</h1>
					<h2 className="text-[#2C3E50]">
						Some of the numbers that tell our story
					</h2>
				</div>
				<a
					href="/projects"
					className="inline-flex items-center gap-2 rounded-lg bg-[#1FBEB6] px-3 py-2 text-white font-semibold hover:bg-[#7EC8E3] transition-colors">
					<ArrowRight />
					<span className={open_sans.className}>MORE OF OUR PROJECTS</span>
				</a>
			</div>
			<div className="mt-5">
				<NumberSection stats={statsData} />
			</div>
		</section>
	);
}
