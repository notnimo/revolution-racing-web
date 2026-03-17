import { cardImageType } from "@/src/lib/team-members";
import { Contact } from "@/src/lib/contacts";

type sponsorType = {
  id: number;
  sponsorName: string;
  description: string;
  image: cardImageType<`/sponsor/${string}.png`>;
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
  primary: sponsorType[];
  secondary: sponsorType[];
  tier3: sponsorType[];
  others: sponsorType[];
};

// Sponsor data to change with real imported from json or something like that, for now it's hardcoded for testing purposes
const famar: sponsorType = {
  id: 0,
  sponsorName: "Famar",
  description: "",
  image: { imageRef: "/sponsor/FAMAR/famar.png" },
  header: "FOO",
  contactSocials: { website: { id: 1, type: "website", href: "foo.com" } },
};
const hyperion: sponsorType = {
  id: 1,
  sponsorName: "Hyperion",
  description: "",
  image: { imageRef: "/sponsor/hyperion/hyperion-black.png" },
  header: "FOO",
  contactSocials: { website: { id: 1, type: "website", href: "foo.com" } },
};
const mitor: sponsorType = {
  id: 2,
  sponsorName: "Mitor",
  description: "",
  image: { imageRef: "/sponsor/mitor/mitor-logo.png" },
  header: "FOO",
  contactSocials: { website: { id: 1, type: "website", href: "foo.com" } },
};
const comuneGiaveno: sponsorType = {
  id: 3,
  sponsorName: "Comune di Giaveno",
  description: "",
  image: { imageRef: "/sponsor/giaveno/giaveno.png" },
  header: "FOO",
  contactSocials: { website: { id: 1, type: "website", href: "foo.com" } },
};
const pascal: sponsorType = {
  id: 4,
  sponsorName: "ISS Blaise Pascal",
  description: "",
  image: { imageRef: "/sponsor/Pascal/pascal.png" },
  header: "FOO",
  contactSocials: { website: { id: 1, type: "website", href: "foo.com" } },
};
const poliTo: sponsorType = {
  id: 5,
  sponsorName: "Squadra Corse PoliTo",
  description: "",
  image: { imageRef: "/sponsor/poliTo/poli-white-logo.png" },
  header: "FOO",
  contactSocials: { website: { id: 1, type: "website", href: "foo.com" } },
};
const centroServizi: sponsorType = {
  id: 6,
  sponsorName: "Centro Servizi",
  description: "",
  image: { imageRef: "/sponsor/centro-servizi/centro_servizi.png" },
  header: "FOO",
  contactSocials: { website: { id: 1, type: "website", href: "foo.com" } },
};

export type { sponsorType, sponsorPack };
export { famar, hyperion, mitor, comuneGiaveno, pascal, poliTo, centroServizi };
