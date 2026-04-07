"use client";

import { useWindowWidth } from "@/src/hooks/useWindowWidth";

import { Item, ItemHeader, ItemContent } from "@/src/components/item";

import { Stat } from "@/src/lib/stats";

import { barlowCondensed } from "@/src/ui/fonts";

function getNumPerSection(width: number) {
	if (width < 640) return 1;
	if (width < 768) return 2;
	if (width < 1024) return 3;
	return 4;
}

export function NumberSection({ stats }: { stats: Stat[] }) {
	const sections: Stat[][] = [];
	const numPerSection = getNumPerSection(useWindowWidth());
	for (let i = 0; i < stats.length; i += numPerSection) {
		sections.push(stats.slice(i, i + numPerSection));
	}
	return (
		<div className="w-screen flex flex-col justify-center">
			{sections &&
				sections.map((section, sectionIndex) => (
					<div
						key={sectionIndex}
						className="flex flex-col sm:flex-row items-center justify-center gap-4 p-4">
						{section.map((stat) => {
							const statStyle =
								"w-[92vw] sm:w-[44vw] md:w-[30vw] lg:w-[22vw] h-[20vh] min-h-[12rem] flex flex-row items-center justify-center text-center bg-white";
							return (
								<Item key={stat.id} className={statStyle}>
									<ItemHeader>
										<h1
											className={`${barlowCondensed.className} text-5xl md:text-6xl text-[#3B9FE5] font-bold text-center`}>
											{stat.value}
										</h1>
									</ItemHeader>
									<ItemContent>
										<h3 className="text-lg md:text-xl font-semibold text-[#2C3E50]">
											{stat.label}
										</h3>
									</ItemContent>
								</Item>
							);
						})}
					</div>
				))}
		</div>
	);
}
