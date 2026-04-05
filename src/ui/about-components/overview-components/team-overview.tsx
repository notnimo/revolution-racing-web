import { useEffect, useRef, useState } from "react";

import { ArrowLeft, ArrowRight, UsersRound } from "lucide-react";

import { TMtype } from "@/src/lib/team-members";

import { TMCard } from "@/src/ui/about-components/team-mbr-card";
import { open_sans } from "@/src/ui/fonts";

export function TeamOverview({ teamMembers }: { teamMembers: TMtype[] }) {
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
				<div className="flex flex-col md:flex-row items-center w-full text-left justify-between border border-[#E8F5FC] rounded-2xl p-4 md:p-6 gap-3 bg-white">
					<div>
						<h1 className="text-3xl md:text-4xl font-bold text-[#3B9FE5]">
							Our Team
						</h1>
						<h2 className="text-[#2C3E50]">
							Meet the passionate individuals behind our success
						</h2>
					</div>
					<a
						href="/projects"
						className="inline-flex items-center gap-2 rounded-lg bg-[#1FBEB6] px-3 py-2 text-white font-semibold hover:bg-[#7EC8E3] transition-colors">
						<ArrowRight />
						<span className={open_sans.className}>MORE ABOUT US</span>
					</a>
				</div>
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
										className="h-fit min-w-[85vw] md:min-w-[20rem] lg:min-w-[22rem] max-w-[85vw] md:max-w-[20rem] rounded-2xl bg-white shadow-lg p-2">
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
