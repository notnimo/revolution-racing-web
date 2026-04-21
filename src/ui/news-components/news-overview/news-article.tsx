import {
	Item,
	ItemActions,
	ItemContent,
	ItemDescription,
	ItemHeader,
	ItemMedia,
	ItemTitle,
} from "@/src/components/item";
import { Separator } from "@/src/components/separator";
import { Card, CardContent } from "@/src/components/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/src/components/carousel";

import { matchBadge, NewsType } from "@/src/lib/home/news";

export function NewsArticle({ article }: { article: NewsType }) {
	return (
		<Item className="w-full h-fit flex flex-col gap-4 border-2 border-[#E8F5FC] bg-white rounded-2xl shadow-md p-4 md:p-6 min-h-[400px]">
			<ItemHeader className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
				<ItemTitle>
					<h2 className="text-2xl md:text-3xl font-bold text-[#3B9FE5]">
						{article.title}
					</h2>
				</ItemTitle>
				<div className="flex flex-row items-center gap-2 text-sm text-[#2C3E50]">
					{article.badges &&
						article.badges.map((badge, index) => {
							const BadgeUi = matchBadge[badge];
							return <BadgeUi key={index} />;
						})}
					<span className="font-medium">{article.date}</span>
				</div>
			</ItemHeader>

			<div className="flex flex-col md:flex-row gap-4 flex-1">
				<div className="w-full md:w-[40%] h-full">
					<div className="w-full h-full rounded-xl relative p-4">
						<Card>
							<CardContent className="h-full flex items-center justify-center p-0">
								<img
									src={article.primaryImage.imageRef}
									alt={article.primaryImage.altText}
									className="w-full h-full object-cover rounded-lg"
								/>
							</CardContent>
						</Card>
					</div>
				</div>

				<ItemContent className="w-full md:w-[60%] h-full">
					<ItemDescription className="text-[#192530] text-lg font-medium">
						{article.subtitle}
					</ItemDescription>
					{article.paragraph && (
						<div className="mt-3 space-y-2 text-sm text-[#2C3E50]">
							{typeof article.paragraph === "string" ? (
								<p>{article.paragraph}</p>
							) : (
								article.paragraph.map((paragraph, index) => (
									<p key={index}>{paragraph}</p>
								))
							)}
						</div>
					)}
				</ItemContent>
			</div>
		</Item>
	);
}
