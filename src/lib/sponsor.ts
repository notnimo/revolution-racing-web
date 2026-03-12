type sponsorType = {
  sponsorName: string;
  description: string;
  imagePath: `/sponsor/${string}.png`;
};
type sponsorPack = {
  primary: sponsorType;
  secondary: Record<string, sponsorType>;
  tier3: Record<string, sponsorType>;
  others: Record<string, sponsorType>;
};

const famar: sponsorType = {
  sponsorName: "Famar",
  description: "",
  imagePath: "/sponsor/FAMAR/famar.png",
};
const hyperion: sponsorType = {
  sponsorName: "Hyperion",
  description: "",
  imagePath: "/sponsor/hyperion/hyperion-black.png",
};
const mitor: sponsorType = {
  sponsorName: "Mitor",
  description: "",
  imagePath: "/sponsor/mitor/mitor-logo.png",
};
const comuneGiaveno: sponsorType = {
  sponsorName: "Comune di Giaveno",
  description: "",
  imagePath: "/sponsor/giaveno/giaveno.png",
};
const pascal: sponsorType = {
  sponsorName: "ISS Blaise Pascal",
  description: "",
  imagePath: "/sponsor/Pascal/pascal.png",
};
const poliTo: sponsorType = {
  sponsorName: "Squadra Corse PoliTo",
  description: "",
  imagePath: "/sponsor/poliTo/poli-white-logo.png",
};
const centroServizi: sponsorType = {
  sponsorName: "Centro Servizi",
  description: "",
  imagePath: "/sponsor/centro-servizi/centro_servizi.png",
};

export type { sponsorType, sponsorPack };
export { famar, hyperion, mitor, comuneGiaveno, pascal, poliTo, centroServizi };
