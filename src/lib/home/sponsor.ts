import { default as rawSponsorData } from "@/src/lib/home/data/sponsors.json";

import { ImageRef } from "@/src/lib/imageRef";
import { Contact } from "@/src/lib/contacts";

type Sponsor = {
	id: number;
	sponsorName: string;
	description: string;
	image: ImageRef<`/sponsor/${string}.png`>;
	header: string;
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
	carouselImages?: ImageRef<`/sponsor/${string}.${"png" | "jpeg" | "jpg" | "webp"}`>[];
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
	ansysEsss,
	hyperion,
	mitor,
	comuneGiaveno,
	pascal,
	centroServizi,
	deltaTi,
	ilma,
	theBos,
	ferco,
] = sponsorData as Sponsor[];

const sponsorsList: sponsorPack = {
	primary: [famar, sparco, deltaTi, ilma],
	secondary: [hyperion, theBos, ferco],
	tier3: [mitor, ansysEsss, centroServizi],
	others: [comuneGiaveno, pascal],
};

export type { Sponsor, sponsorPack, PrimarySponsor };
export { sponsorsList };
