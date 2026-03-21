import { NewsType } from "@/src/lib/news";
import { NewsArticle } from "@/src/ui/news-components/news-article";

export function NewsSection({ news }: { news: NewsType[] }) {
  return (
    <div>
      {news.map((article) => (
        <NewsArticle key={article.id} article={article} />
      ))}
    </div>
  );
}
