import { default as sponsorRawData } from "@/src/lib/about/data/sponsors.json";

import { ImageRef } from "@/src/lib/imageRef";

type Sponsor = {
	name: string;
};

function getSponsors(): Sponsor[] {
	let sponsorData: Sponsor[] = [];
	Object.values(sponsorRawData).forEach((sponsor) =>
		sponsorData.push(sponsor as Sponsor),
	);
	return sponsorData;
}

function getSponsor(name: string): Sponsor | undefined {
	const sponsors = getSponsors();
	return sponsors.find((sponsor) => sponsor.name === name);
}

export type { Sponsor };
export { getSponsors, getSponsor };
