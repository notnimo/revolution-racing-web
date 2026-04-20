import { default as rawSponsorData } from "@/src/lib/data/sponsors.json";

import { ImageType } from "@/src/lib/team-members";
import { Contact } from "@/src/lib/contacts";

type Sponsor = {
	id: number;
	sponsorName: string;
	description: string;
	image: ImageType<`/sponsor/${string}.png`>;
	header: string; // @TODO prop name to change
	contactSocials: {
		website: Contact;
		instagram?: Contact;
		twitter?: Contact;
		tiktok?: Contact;
		linkedin?: Contact;
		facebook?: Contact;
	};
};
interface PrimarySponsor extends Sponsor {
	carouselImages?: ImageType<`/sponsor/${string}.png`>[];
}

type sponsorPack = {
	primary: PrimarySponsor[];
	secondary: Sponsor[];
	tier3: Sponsor[];
	others: Sponsor[];
};

let sponsorData: Sponsor[] = [];
Object.values(rawSponsorData).forEach((sponsor) =>
	sponsorData.push(sponsor as Sponsor),
);
const [
	famar,
	sparco,
	ansys,
	hyperion,
	mitor,
	comuneGiaveno,
	pascal,
	centroServizi,
] = sponsorData as Sponsor[];

const sponsorsList: sponsorPack = {
	primary: [famar, ansys],
	secondary: [sparco, hyperion],
	tier3: [mitor, centroServizi],
	others: [comuneGiaveno, pascal],
};

export type { Sponsor, sponsorPack, PrimarySponsor };
export { sponsorsList };
