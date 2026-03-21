import { newsData } from "@/src/lib/news";

import { NewsSection } from "@/src/ui/news-components/news-overview/news-section";

export function NewsSnapshot() {
  return (
    <div className="w-screen">
      <h1>Our Most Significant Achievement</h1>
      <div>
        <NewsSection news={newsData} />
      </div>
    </div>
  );
}
