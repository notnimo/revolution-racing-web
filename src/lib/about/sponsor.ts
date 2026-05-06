import { default as sponsorRawData } from "@/src/lib/about/data/sponsors.json";

import { ImageRef } from "@/src/lib/imageRef";
import { Contact } from "@/src/lib/contacts";

const badgeOpts = [
	"engineering support",
	"technical support",
	"financial support",
	"media partner",
	"uniform partner",
	"other",
] as const;
type BadgeOptions = (typeof badgeOpts)[number];

type Sponsor = {
	id: number;
	primaryLogo: ImageRef<`/sponsors/${string}.png`>;
	name: string;
	headline: string;
	description?: string;
	carouselImages?: ImageRef<`/sponsors/${string}.${"png" | "jpeg" | "jpg" | "webp"}`>[];
	contactSocials: {
		website: Contact;
		instagram?: Contact;
		twitter?: Contact;
		tiktok?: Contact;
		linkedin?: Contact;
		facebook?: Contact;
	};
	badges: BadgeOptions[];
};

type SponsorPack = {
	main: Sponsor;
	platinum: Sponsor[];
	gold: Sponsor[];
	silver: Sponsor[];
	others: Sponsor[];
};

function getSponsors(): SponsorPack {
	let sponsorData: Sponsor[] = [];
	Object.values(sponsorRawData).forEach((sponsor) =>
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
	return {
		main: famar,
		platinum: [sparco, deltaTi, ilma],
		gold: [hyperion, theBos, ferco],
		silver: [mitor, ansysEsss, centroServizi],
		others: [comuneGiaveno, pascal],
	};
}

function getSponsor(name: string): Sponsor | undefined {
	const sponsors = getSponsors();
	const allSponsors = [
		sponsors.main,
		...sponsors.platinum,
		...sponsors.gold,
		...sponsors.silver,
		...sponsors.others,
	];
	return allSponsors.find((sponsor) => sponsor.name === name);
}

export type { Sponsor, SponsorPack };
export { getSponsors, getSponsor };
