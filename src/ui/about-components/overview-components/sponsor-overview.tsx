import { sponsorPack, sponsorType } from "@/src/lib/sponsor";

function FamarCard() {
  return <div></div>;
}

export function SponsorOverview({ sponsors }: { sponsors: sponsorPack }) {
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
