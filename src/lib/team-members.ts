const positionOptList = [
  "Project Manager",
  "Design Engineer",
  "Manufacturing Engineer",
  "Graphic Designer",
  "Resource Manager",
] as const;
type positionOptions = (typeof positionOptList)[number];

type TMtype = {
  name: string;
  position: positionOptions;
  imageName: string;
  description: string;
};

export type { TMtype };
