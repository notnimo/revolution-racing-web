import { ArrowRight } from "lucide-react";

import { newsData } from "@/src/lib/news";

import { NewsSection } from "@/src/ui/news-components/news-overview/news-section";
import { open_sans } from "@/src/ui/fonts";

export function NewsSnapshot() {
	return (
		<div className="w-screen">
			<div className="flex flex-row items-center justify-center gap-3">
				<h1 className="text-3xl font-bold mb-2">Our News</h1>
				<a href="/news">
					<div className="flex flex-row w-fit h-fit items-center justify-center">
						<ArrowRight />
						<h3 className={open_sans.className}>MORE OF OUR WORK</h3>
					</div>
				</a>
			</div>
			<div>
				<NewsSection news={newsData} />
			</div>
		</div>
	);
}
