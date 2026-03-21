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

import { matchBadge, NewsType } from "@/src/lib/news";

export function NewsArticle({ article }: { article: NewsType }) {
  return (
    <Item className="w-full h-fit flex flex-col md:flex-row items-start gap-4 border-2 border-solid border-primary rounded-lg p-4">
      <ItemHeader className="flex flex-row justify-start gap-3">
        <ItemTitle>
          <h2>{article.title}</h2>
        </ItemTitle>
        {article.badges &&
          article.badges.map((badge) => {
            const BadgeUi = matchBadge[badge];
            return <BadgeUi />;
          })}
        <h4>{article.date}</h4>
      </ItemHeader>
      <Separator />
      {article.images ? (
        <div>carousel</div>
      ) : (
        <ItemMedia>
          <img
            src={article.primaryImage.imageRef}
            alt={article.primaryImage.altText}
            className="w-full h-full object-cover"
          />
        </ItemMedia>
      )}
      <Separator orientation="vertical" className="" />
      <ItemContent>
        <ItemDescription>{article.description}</ItemDescription>
      </ItemContent>
    </Item>
  );
}
