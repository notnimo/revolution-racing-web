import { ArrowRight } from "lucide-react";

import { newsData } from "@/src/lib/home/news";

import { NewsSection } from "@/src/ui/news-components/news-overview/news-section";
import { open_sans } from "@/src/ui/fonts";

export function NewsSnapshot() {
	return (
		<section className="w-screen p-4 md:p-8 bg-gradient-to-b from-[#E8F5FC] to-[#f6fbff] fade-in-section">
			{/*<div className="flex flex-col md:flex-row items-center justify-between border border-[#E8F5FC] bg-white rounded-2xl p-4 md:p-6 gap-3">
				<div>
					<h1 className="text-3xl md:text-4xl font-bold text-[#3B9FE5]">
						Our News
					</h1>
					<p className="text-[#2C3E50]">
						Latest updates and stories from our racing team.
					</p>
				</div>
				<a
					href="/news"
					className="inline-flex items-center gap-2 rounded-lg bg-[#1FBEB6] px-3 py-2 text-white font-semibold hover:bg-[#7EC8E3] transition-colors">
					<ArrowRight />
					<span className={open_sans.className}>MORE OF OUR WORK</span>
				</a>
			</div>*/}
			<div className="flex flex-col md:flex-row items-center justify-center border border-[#E8F5FC] bg-white rounded-2xl p-4 md:p-6 gap-3">
				<div className="flex flex-col items-center gap-2">
					<h1 className="text-3xl md:text-4xl font-bold text-[#3B9FE5]">
						Our News
					</h1>
					<p className="text-[#2C3E50]">
						Latest updates and stories from our racing team.
					</p>
				</div>
			</div>
			<div className="mt-5">
				<NewsSection news={newsData} />
			</div>
		</section>
	);
}
