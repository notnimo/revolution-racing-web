const positionOptList = [
  "Project Manager",
  "Design Engineer",
  "Manufacturing Engineer",
  "Graphic Designer",
  "Resource Manager",
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
type teamMembersPack = Record<string, TMtype>;

const tm1: TMtype = {
  name: "John Doe",
  position: "Project Manager",
  image: {
    imageRef: "/team-members/john-doe.png",
  },
  description: "John is our Project Manager.",
};

export type { TMtype, teamMembersPack };
export { tm1 };
