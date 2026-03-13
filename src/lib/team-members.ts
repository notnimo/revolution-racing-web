const positionOptList = [
  "Project Manager",
  "Design Engineer",
  "Manufacturing Engineer",
  "Graphic Designer",
  "Resource Manager",
  "Web Developer",
] as const;
type positionOptions = (typeof positionOptList)[number];
type TMimageType = {
  imageRef: `/team-members/${string}.png`;
  width?: 0;
  height?: 0;
};
type TMtype = {
  name: string;
  position: positionOptions;
  image: TMimageType;
  description: string;
};
type teamMembersPack = TMtype[];

// Team members data to change with real imported from json or something like that, for now it's hardcoded for testing purposes
const tm1: TMtype = {
  name: "Gabriele di Giorgio",
  position: "Project Manager",
  image: {
    imageRef: "/team-members/foo2.png",
  },
  description: "Gabriele is our Project Manager.",
};
const tm2: TMtype = {
  name: "Arturo Serpico",
  position: "Design Engineer",
  image: {
    imageRef: "/team-members/foo2.png",
  },
  description: "Arturo is our Head of the Engineering",
};
const tm3: TMtype = {
  name: "Edoardo Bona",
  position: "Graphic Designer",
  image: {
    imageRef: "/team-members/foo2.png",
  },
  description: "Edoardo is our Graphic Designer.",
};
const tm4: TMtype = {
  name: "Federico Ponti",
  position: "Design Engineer",
  image: {
    imageRef: "/team-members/foo2.png",
  },
  description: "Federico is one of our Design Engineers.",
};
const tm5: TMtype = {
  name: "Sherine Cirigliano",
  position: "Design Engineer",
  image: {
    imageRef: "/team-members/foo2.png",
  },
  description: "Sherine is one of our Design Engineers.",
};
const tm6: TMtype = {
  name: "Pietro Tranca",
  position: "Manufacturing Engineer",
  image: {
    imageRef: "/team-members/foo2.png",
  },
  description: "Pietro is one of our Manufacturing Engineers.",
};
const tm7: TMtype = {
  name: "Damiano Livoni",
  position: "Web Developer",
  image: {
    imageRef: "/team-members/foo2.png",
  },
  description: "Damiano is our Web Developer.",
};

export type { TMtype, teamMembersPack };
export { tm1, tm2, tm3, tm4, tm5, tm6, tm7 };
