import { useRef, useState } from "react";

import { TMCard } from "@/src/ui/about-components/team-mbr-card";

import { teamMembersPack, TMtype } from "@/src/lib/team-members";

function TeamDescription() {
  return (
    <>
      <div className="m-1.5">
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
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="flex flex-col items-center text-center">
      <div>
        <h1>Our Team</h1>
      </div>

      <div>
        <TeamDescription />
      </div>

      <div ref={containerRef} className="overflow-x-scroll scroll-smooth">
        <div className="flex flex-row items-center gap-2">
          {teamMembers &&
            teamMembers.map((member) => (
              <div key={member.id} className="m-1.5 w-85 h-fit">
                <TMCard teamMember={member as TMtype} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
