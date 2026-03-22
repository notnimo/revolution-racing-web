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
    <Item className="w-full h-fit flex flex-col md:flex-row items-start gap-4 border-2 border-solid border-primary rounded-lg p-4">
      <ItemHeader className="flex flex-row justify-start gap-3">
        <ItemTitle>
          <h2>{article.title}</h2>
        </ItemTitle>
        {article.badges &&
          article.badges.map((badge, index) => {
            const BadgeUi = matchBadge[badge];
            return <BadgeUi key={index} />;
          })}
        <h4>{article.date}</h4>
      </ItemHeader>
      <Separator />
      {article.images ? (
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full max-w-[12rem] sm:max-w-xs md:max-w-sm">
          <CarouselContent>
            {article.images.map((image, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <img
                        src={image.imageRef}
                        alt={image.altText}
                        className="w-full h-full object-cover rounded-md"
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
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
        {article.paragraphs && (
          <ItemDescription>
            {article.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-sm text-muted-foreground">
                {paragraph}
              </p>
            ))}
          </ItemDescription>
        )}
      </ItemContent>
    </Item>
  );
}
