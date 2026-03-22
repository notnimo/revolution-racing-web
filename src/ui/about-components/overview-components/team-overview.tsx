import { useEffect, useRef, useState } from "react";

import { ArrowLeft, ArrowRight, UsersRound } from "lucide-react";

import { teamMembersPack, TMtype } from "@/src/lib/team-members";

import { TMCard } from "@/src/ui/about-components/team-mbr-card";
import { open_sans } from "@/src/ui/fonts";

function TeamDescription() {
	return (
		<div className="m-1.5 max-w-3xl text-base md:text-lg leading-relaxed text-[#2C3E50]">
			Team description Lorem ipsum, dolor sit amet consectetur adipisicing elit.
			Totam laboriosam modi illum facilis quo, non consectetur molestiae iusto
			ab, ipsum reprehenderit beatae, praesentium expedita reiciendis? Harum,
			dolore repudiandae. Accusantium, similique?
		</div>
	);
}

export function TeamOverview({
	teamMembers,
}: {
	teamMembers: teamMembersPack;
}) {
	const [scrollPosition, setScrollPosition] = useState(0);
	const [canScrollLeft, setCanScrollLeft] = useState(false);
	const [canScrollRight, setCanScrollRight] = useState(false);
	const containerRef = useRef<HTMLDivElement>(null);

	const updateScrollBounds = () => {
		const container = containerRef.current;
		if (!container) return;
		setScrollPosition(container.scrollLeft);
		setCanScrollLeft(container.scrollLeft > 10);
		setCanScrollRight(
			container.scrollLeft + container.clientWidth < container.scrollWidth - 10,
		);
	};

	useEffect(() => {
		const container = containerRef.current;
		if (!container) return;

		updateScrollBounds();
		container.addEventListener("scroll", updateScrollBounds, { passive: true });
		return () => container.removeEventListener("scroll", updateScrollBounds);
	}, []);

	const scrollByOffset = (offset: number) => {
		const container = containerRef.current;
		container?.scrollBy({ left: offset, behavior: "smooth" });
	};

	return (
		<section className="w-full py-8 md:py-10 fade-in-section">
			<div className="flex flex-col items-center text-center w-full gap-3">
				<div className="flex flex-row items-center justify-center gap-2">
					<h1 className="text-3xl md:text-4xl font-bold">Our Team</h1>
					<a href="/about-us" className="text-sm text-[#1FBEB6] underline">
						<div className="flex flex-row gap-2 items-center">
							<UsersRound />
							<h3 className={open_sans.className}>ABOUT US</h3>
						</div>
					</a>
				</div>

				<TeamDescription />

				<div className="w-full relative">
					<div className="flex items-center justify-between gap-2">
						<button
							type="button"
							disabled={!canScrollLeft}
							onClick={() => scrollByOffset(-280)}
							className="hidden md:inline-flex items-center justify-center rounded-full border border-[#7EC8E3] bg-[#E8F5FC] px-3 py-2 text-[#2C3E50] font-semibold disabled:opacity-40 disabled:cursor-not-allowed transition-all">
							<ArrowLeft />
						</button>

						<div
							ref={containerRef}
							className="hide-scrollbar flex w-full overflow-x-auto overflow-y-hidden scroll-smooth">
							<div className="flex gap-4 items-stretch">
								{teamMembers?.map((member) => (
									<div
										key={member.id}
										className="min-w-[85vw] md:min-w-[20rem] lg:min-w-[22rem] max-w-[85vw] md:max-w-[20rem] rounded-2xl bg-white shadow-lg p-2">
										<TMCard teamMember={member as TMtype} />
									</div>
								))}
							</div>
						</div>

						<button
							type="button"
							disabled={!canScrollRight}
							onClick={() => scrollByOffset(280)}
							className="hidden md:inline-flex items-center justify-center rounded-full border border-[#7EC8E3] bg-[#E8F5FC] px-3 py-2 text-[#2C3E50] font-semibold disabled:opacity-40 disabled:cursor-not-allowed transition-all">
							<ArrowRight />
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}
