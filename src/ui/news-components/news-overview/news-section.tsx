import { NewsType } from "@/src/lib/news";
import { NewsArticle } from "@/src/ui/news-components/news-article";

export function NewsSection({ news }: { news: NewsType[] }) {
	return (
		<div className="flex flex-col gap-4 w-full">
			{news.map((article) => (
				<NewsArticle key={article.id} article={article} />
			))}
		</div>
	);
}
