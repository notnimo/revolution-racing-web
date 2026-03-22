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

import { matchBadge, NewsType } from "@/src/lib/news";

export function NewsArticle({ article }: { article: NewsType }) {
	return (
		<Item className="w-full h-fit flex flex-col gap-4 border-2 border-[#E8F5FC] bg-white rounded-2xl shadow-md p-4 md:p-6">
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

			<div className="flex flex-col md:flex-row gap-4">
				<div className="w-full md:w-[35%]">
					{article.images ? (
						<Carousel
							opts={{ align: "start" }}
							className="w-full h-60 md:h-72 rounded-xl overflow-hidden">
							<CarouselContent>
								{article.images.map((image, index) => (
									<CarouselItem key={index}>
										<div className="p-1">
											<Card>
												<CardContent className="h-56 md:h-64 flex items-center justify-center p-0 overflow-hidden">
													<img
														src={image.imageRef}
														alt={image.altText}
														className="w-full h-full object-cover"
													/>
												</CardContent>
											</Card>
										</div>
									</CarouselItem>
								))}
							</CarouselContent>
							<div className="absolute inset-x-0 bottom-2 flex justify-between px-3">
								<CarouselPrevious className="rounded-full bg-white/80 p-1" />
								<CarouselNext className="rounded-full bg-white/80 p-1" />
							</div>
						</Carousel>
					) : (
						<div className="h-60 md:h-72 rounded-xl overflow-hidden">
							<img
								src={article.primaryImage.imageRef}
								alt={article.primaryImage.altText}
								className="w-full h-full object-cover"
							/>
						</div>
					)}
				</div>

				<ItemContent className="w-full md:w-[65%]">
					<ItemDescription className="text-[#2C3E50]">
						{article.description}
					</ItemDescription>
					{article.paragraphs && (
						<div className="mt-3 space-y-2 text-sm text-[#2C3E50]">
							{article.paragraphs.map((paragraph, index) => (
								<p key={index}>{paragraph}</p>
							))}
						</div>
					)}
				</ItemContent>
			</div>
		</Item>
	);
}
