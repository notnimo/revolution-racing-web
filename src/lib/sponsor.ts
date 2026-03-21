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
type sponsorPack = {
  primary: Sponsor[];
  secondary: Sponsor[];
  tier3: Sponsor[];
  others: Sponsor[];
};

// Sponsor data to change with real imported from json or something like that, for now it's hardcoded for testing purposes
const famar: Sponsor = {
  id: 0,
  sponsorName: "Famar",
  description: "kkkkkkkkkkkkk",
  image: { imageRef: "/sponsor/FAMAR/famar.png" },
  header: "FOO",
  contactSocials: { website: { id: 1, type: "website", href: "foo.com" } },
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
const poliTo: Sponsor = {
  id: 5,
  sponsorName: "Squadra Corse PoliTo",
  description: "kkkkkkkkkkkk",
  image: { imageRef: "/sponsor/poliTo/poli-white-logo.png" },
  header: "FOO",
  contactSocials: {
    website: { id: 1, type: "website", href: "foo.com" },
    instagram: {
      id: 2,
      type: "instagram",
      href: "https://www.instagram.com/squadracorsepolito/",
    },
  },
};
const centroServizi: Sponsor = {
  id: 6,
  sponsorName: "Centro Servizi",
  description: "",
  image: { imageRef: "/sponsor/centro-servizi/centro_servizi.png" },
  header: "FOO",
  contactSocials: { website: { id: 1, type: "website", href: "foo.com" } },
};

export type { Sponsor, sponsorPack };
export { famar, hyperion, mitor, comuneGiaveno, pascal, poliTo, centroServizi };
