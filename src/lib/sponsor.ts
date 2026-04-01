import { default as sponsorData } from "@/src/lib/data/sponsors.json";

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

// Sponsor data to change with real imported from json or something like that, for now it's hardcoded for testing purposes
const famar: PrimarySponsor = {
	id: 0,
	sponsorName: "Famar",
	description: "kkkkkkkkkkkkk",
	image: { imageRef: "/sponsor/FAMAR/famar-big.png" },
	header: "FOO",
	contactSocials: { website: { id: 1, type: "website", href: "foo.com" } },
	carouselImages: [
		{ imageRef: "/sponsor/foo2.png" },
		{ imageRef: "/sponsor/foo2.png" },
		{ imageRef: "/sponsor/foo2.png" },
	],
};
const hyperion: Sponsor = {
	id: 1,
	sponsorName: "Hyperion",
	description: "kkkkkkk",
	image: { imageRef: "/sponsor/hyperion/hyperion-black.png" },
	header: "FOO",
	contactSocials: { website: { id: 1, type: "website", href: "foo.com" } },
};
const mitor: Sponsor = {
	id: 2,
	sponsorName: "Mitor",
	description: "",
	image: { imageRef: "/sponsor/mitor/mitor-logo.png" },
	header: "FOO",
	contactSocials: { website: { id: 1, type: "website", href: "foo.com" } },
};
const comuneGiaveno: Sponsor = {
	id: 3,
	sponsorName: "Comune di Giaveno",
	description: "",
	image: { imageRef: "/sponsor/giaveno/giaveno.png" },
	header: "FOO",
	contactSocials: { website: { id: 1, type: "website", href: "foo.com" } },
};
const pascal: Sponsor = {
	id: 4,
	sponsorName: "ISS Blaise Pascal",
	description: "",
	image: { imageRef: "/sponsor/Pascal/pascal.png" },
	header: "FOO",
	contactSocials: { website: { id: 1, type: "website", href: "foo.com" } },
};
const centroServizi: Sponsor = {
	id: 6,
	sponsorName: "Centro Servizi",
	description: "",
	image: { imageRef: "/sponsor/centro-servizi/centro_servizi.png" },
	header: "FOO",
	contactSocials: { website: { id: 1, type: "website", href: "foo.com" } },
};

export type { Sponsor, sponsorPack, PrimarySponsor };
export { famar, hyperion, mitor, comuneGiaveno, pascal, centroServizi };
