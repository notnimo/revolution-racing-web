const positionOptList = [
  "Project Manager",
  "Design Engineer",
  "Manufacturing Engineer",
  "Graphic Designer",
  "Resource Manager",
] as const;
type positionOptions = (typeof positionOptList)[number];

type TMimageType = {
  imageRef: string;
  width: number;
  height: number;
};

type TMtype = {
  name: string;
  position: positionOptions;
  image: TMimageType;
  description: string;
};

export type { TMtype };
