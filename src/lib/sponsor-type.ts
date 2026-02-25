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

export type { sponsorType, sponsorPack };
