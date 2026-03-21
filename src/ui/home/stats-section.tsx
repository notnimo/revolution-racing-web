import { statsData } from "@/src/lib/stats";

import { NumberSection } from "@/src/ui/news-components/news-overview/number-section";

export function StatsSection() {
  return (
    <div className="w-screen">
      <h1>Stats Section</h1>
      <h2>Some of the numbers that tell our story</h2>
      <NumberSection stats={statsData} />
    </div>
  );
}
