import {
  InstagramLogo,
  FacebookLogo,
  LinkedinLogo,
  YoutubeLogo,
  MailLogo,
  TikTokLogo,
  WebsiteLogo,
} from "@/src/ui/social-icons";

const typeOpts = [
  "instagram",
  "facebook",
  "linkedin",
  "youtube",
  "email",
  "tiktok",
  "website",
] as const;
type typeOptions = (typeof typeOpts)[number];

type Contact = {
  id: number;
  type: typeOptions;
  href: string;
  title?: string;
  description?: string;
};

const matchIcon = {
  tiktok: TikTokLogo,
  instagram: InstagramLogo,
  facebook: FacebookLogo,
  linkedin: LinkedinLogo,
  youtube: YoutubeLogo,
  email: MailLogo,
  website: WebsiteLogo,
};

export { type Contact, matchIcon };
