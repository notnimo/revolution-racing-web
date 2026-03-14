import { TMCard } from "@/src/ui/about-components/team-mbr-card";

import { teamMembersPack, TMtype } from "@/src/lib/team-members";

function TeamDescription() {
  return (
    <>
      <div>
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
  return (
    <div className="flex flex-col items-center text-center">
      <div>
        <h1>Our Team</h1>
      </div>

      <div>
        <TeamDescription />
      </div>

      <div className="flex flex-col items-center">
        {teamMembers &&
          teamMembers.map((member) => (
            <div key={member.id} className="mb-4">
              <TMCard teamMember={member as TMtype} />
            </div>
          ))}
      </div>
    </div>
  );
}
