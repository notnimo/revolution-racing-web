type sponsorType = {
  id: number;
  sponsorName: string;
  description: string;
  imagePath: `/sponsor/${string}.png`;
};
type sponsorPack = {
  primary: sponsorType[];
  secondary: sponsorType[];
  tier3: sponsorType[];
  others: sponsorType[];
};

const famar: sponsorType = {
  id: 0,
  sponsorName: "Famar",
  description: "",
  imagePath: "/sponsor/FAMAR/famar.png",
};
const hyperion: sponsorType = {
  id: 1,
  sponsorName: "Hyperion",
  description: "",
  imagePath: "/sponsor/hyperion/hyperion-black.png",
};
const mitor: sponsorType = {
  id: 2,
  sponsorName: "Mitor",
  description: "",
  imagePath: "/sponsor/mitor/mitor-logo.png",
};
const comuneGiaveno: sponsorType = {
  id: 3,
  sponsorName: "Comune di Giaveno",
  description: "",
  imagePath: "/sponsor/giaveno/giaveno.png",
};
const pascal: sponsorType = {
  id: 4,
  sponsorName: "ISS Blaise Pascal",
  description: "",
  imagePath: "/sponsor/Pascal/pascal.png",
};
const poliTo: sponsorType = {
  id: 5,
  sponsorName: "Squadra Corse PoliTo",
  description: "",
  imagePath: "/sponsor/poliTo/poli-white-logo.png",
};
const centroServizi: sponsorType = {
  id: 6,
  sponsorName: "Centro Servizi",
  description: "",
  imagePath: "/sponsor/centro-servizi/centro_servizi.png",
};

export type { sponsorType, sponsorPack };
export { famar, hyperion, mitor, comuneGiaveno, pascal, poliTo, centroServizi };
