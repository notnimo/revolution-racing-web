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
  width: 0;
  height: 0;
};

type TMtype = {
  name: string;
  position: positionOptions;
  image: TMimageType;
  description: string;
};

export type { TMtype };
