import {
  Item,
  ItemMedia,
  ItemHeader,
  ItemContent,
} from "@/src/components/item";

import { Stat } from "@/src/lib/stats";

export function NumberSection({ stats }: { stats: Stat[] }) {
  return (
    <div className="w-screen">
      {stats &&
        stats.map((stat) => {
          const statStyle: string = `w-fit h-fit flex flex-col items-center justify-center text-center gap-2 border-2 border-solid border-primary rounded-lg`;
          return (
            <Item key={stat.id} className={statStyle}>
              <ItemHeader>
                <h1>{stat.value}</h1>
              </ItemHeader>
              <ItemContent>
                <h3>{stat.label}</h3>
              </ItemContent>
              {stat.image && (
                <ItemMedia>
                  <img
                    src={stat.image.imageRef}
                    alt={stat.image.altText}
                    className="w-[6rem]"
                  />
                </ItemMedia>
              )}
            </Item>
          );
        })}
    </div>
  );
}
