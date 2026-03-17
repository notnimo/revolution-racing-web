import { useEffect, useRef, useState } from "react";

import { ArrowLeft, ArrowRight } from "lucide-react";

import { TMCard } from "@/src/ui/about-components/team-mbr-card";

import { teamMembersPack, TMtype } from "@/src/lib/team-members";

function TeamDescription() {
  return (
    <>
      <div className="m-1.5 max-w-3xl text-sm leading-relaxed">
        Team description Lorem ipsum, dolor sit amet consectetur adipisicing
        elit. Totam laboriosam modi illum facilis quo, non consectetur molestiae
        iusto ab, ipsum reprehenderit beatae, praesentium expedita reiciendis?
        Harum, dolore repudiandae. Accusantium, similique?
      </div>
    </>
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

    return () => {
      container.removeEventListener("scroll", updateScrollBounds);
    };
  }, []);

  const scrollByOffset = (offset: number) => {
    const container = containerRef.current;
    container?.scrollBy({ left: offset, behavior: "smooth" });
  };

  return (
    <div className="flex flex-col items-center text-center w-full">
      <div>
        <h1 className="text-3xl font-bold mb-2">Our Team</h1>
      </div>

      <TeamDescription />

      <div className="w-full mt-4 px-2 md:px-4">
        <div className="items-center hidden justify-between mb-2 md:flex gap-2">
          <button
            type="button"
            disabled={!canScrollLeft}
            onClick={() => scrollByOffset(-490)}
            className="rounded-full border border-slate-300 bg-white px-3 py-1 text-sm font-semibold text-slate-700 disabled:opacity-40 disabled:cursor-not-allowed">
            <ArrowLeft />
          </button>
          <button
            type="button"
            disabled={!canScrollRight}
            onClick={() => scrollByOffset(490)}
            className="rounded-full border border-slate-300 bg-white px-3 py-1 text-sm font-semibold text-slate-700 disabled:opacity-40 disabled:cursor-not-allowed">
            <ArrowRight />
          </button>
        </div>

        <div className="relative">
          <div
            ref={containerRef}
            className="hide-scrollbar w-full overflow-x-auto overflow-y-hidden">
            <div className="flex gap-3 md:gap-4 items-stretch w-max">
              {teamMembers &&
                teamMembers.map((member) => (
                  <div
                    key={member.id}
                    className="min-w-[240px] md:min-w-[280px] m-1">
                    <TMCard teamMember={member as TMtype} />
                  </div>
                ))}
            </div>
          </div>

          <div
            className={`hidden md:block pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-white to-transparent dark:from-slate-950 transition-opacity duration-200 ${
              canScrollLeft ? "opacity-100" : "opacity-0"
            }`}
          />
          <div
            className={`hidden md:block pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-white to-transparent dark:from-slate-950 transition-opacity duration-200 ${
              canScrollRight ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>
      </div>
    </div>
  );
}
