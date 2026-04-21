import { NewsType } from "@/src/lib/home/news";
import { NewsArticle } from "@/src/ui/news-components/news-overview/news-article";

export function NewsSection({ news }: { news: NewsType[] }) {
	const pairs = [];
	for (let i = 0; i < news.length; i += 2) {
		pairs.push(news.slice(i, i + 2));
	}
	return (
		<div className="flex flex-col gap-4 w-full">
			{pairs.map((pair, index) => (
				<div key={index} className="flex flex-col md:flex-row gap-4">
					{pair.map((article) => (
						<NewsArticle key={article.id} article={article} />
					))}
				</div>
			))}
		</div>
	);
}
