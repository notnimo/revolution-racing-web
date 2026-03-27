import {
	Item,
	ItemMedia,
	ItemHeader,
	ItemContent,
} from "@/src/components/item";

import { Stat } from "@/src/lib/stats";
import { Barlow_Condensed } from "next/font/google";

const barlowCondensed = Barlow_Condensed({
	weight: ["600", "700"],
	subsets: ["latin"],
});

export function NumberSection({ stats }: { stats: Stat[] }) {
	return (
		<div className="w-screen flex flex-wrap justify-center gap-4 p-5 md:p-8">
			{stats &&
				stats.map((stat) => {
					const statStyle =
						"w-[92vw] sm:w-[44vw] md:w-[30vw] lg:w-[22vw] h-[20vh] min-h-[12rem] flex flex-col items-center justify-center text-center gap-3 border-2 border-[#7EC8E3] rounded-2xl bg-[#FFFFFF] shadow-md p-4";

					return (
						<Item key={stat.id} className={statStyle}>
							<ItemHeader>
								<h1
									className={`${barlowCondensed.className} text-5xl md:text-6xl text-[#3B9FE5] font-bold`}>
									{stat.value}
								</h1>
							</ItemHeader>
							<ItemContent>
								<h3
									className="text-lg md:text-xl font-semibold text-[#2C3E50]
">
									{stat.label}
								</h3>
							</ItemContent>
							{stat.image && (
								<ItemMedia>
									<img
										src={stat.image.imageRef}
										alt={stat.image.altText}
										className="w-[18vw] h-[18vw] max-w-[8rem] max-h-[8rem] object-cover rounded-md"
									/>
								</ItemMedia>
							)}
						</Item>
					);
				})}
		</div>
	);
}
