import { ImageType } from "@/src/lib/team-members";

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
  description: string;
  date: `${number}/${number}/${number}`;
  badges: BadgeOptions[];
  paragraphs?: string[];
  primaryImage: ImageType<`/news/${string}.png`>;
  images?: ImageType<`/news/${string}.png`>[];
};

// News data to change with real imported from json or something like that, for now it's hardcoded for testing purposes
const newsData: NewsType[] = [
  {
    id: 0,
    title: "News Title",
    description: "News description",
    date: "01/01/2023",
    badges: ["competition", "development"],
    primaryImage: { imageRef: "/news/foo2.png", altText: "News primary image" },
  },
  {
    id: 1,
    title: "Another News Title",
    description: "Another news description",
    date: "01/02/2023",
    badges: ["sponsor", "event"],
    primaryImage: { imageRef: "/news/foo2.png", altText: "News primary image" },
    images: [
      { imageRef: "/news/foo2.png", altText: "News image 1" },
      { imageRef: "/news/foo2.png", altText: "News image 2" },
      { imageRef: "/news/foo2.png", altText: "News image 3" },
      { imageRef: "/news/foo2.png", altText: "News image 4" },
    ],
  },
];

export { newsData, type NewsType, matchBadge };
