import { sponsorType } from "@/src/lib/sponsor-type";

function FamarCard() {
  return <div></div>;
}

export function SponsorOverview({
  sponsors,
}: {
  sponsors: Record<string, sponsorType>;
}) {
  let temp;

  for (let sponsor in sponsors) {
    temp = (
      <>
        {temp}
        <div></div>
      </>
    );
  }
  return (
    <div>
      <h1>Our Sponsors</h1>
      <div>
        <FamarCard />
      </div>
      <div>{temp}</div>
    </div>
  );
}
