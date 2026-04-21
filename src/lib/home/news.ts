import { default as rawNewsData } from "@/src/lib/home/data/news.json" with { type: "json" };

import { ImageType } from "@/src/lib/home/team-members";

import {
	CompetitionBadge,
	SponsorBadge,
	EventBadge,
	DevelopmentBadge,
	OtherBadge,
	TeamBadge,
} from "@/src/ui/news-components/news-overview/badges";

const badgeOpts = [
	"competition",
	"sponsor",
	"event",
	"development",
	"other",
	"team",
] as const;
type BadgeOptions = (typeof badgeOpts)[number];

const matchBadge = {
	competition: CompetitionBadge,
	sponsor: SponsorBadge,
	event: EventBadge,
	development: DevelopmentBadge,
	other: OtherBadge,
	team: TeamBadge,
};

type NewsType = {
	id: number;
	title: string;
	subtitle: string;
	date: `${number}/${number}/${number}`;
	badges: BadgeOptions[];
	paragraph: string[] | string;
	primaryImage: ImageType<`/news/${string}.${"png" | "jpeg" | "jpg" | "webp"}`>;
};

let newsData: NewsType[] = [];
Object.values(rawNewsData).forEach((news) => newsData.push(news as NewsType));

export { newsData as newsData, type NewsType, matchBadge };
