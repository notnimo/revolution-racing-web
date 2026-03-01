/*
import React from 'react';
import { PhotoStory, VideoStory } from './stories';

const components = {
  photo: PhotoStory,
  video: VideoStory
};

function Story(props) {
  // Correct! JSX type can be a capitalized variable.
  const SpecificStory = components[props.storyType];
  return <SpecificStory story={props.story} />;
}
*/

import { JSX } from "react";
import {
  InstagramLogo,
  FacebookLogo,
  LinkedinLogo,
  YoutubeLogo,
  MailLogo,
  TikTokLogo,
} from "@/src/ui/social-icons";

const typeOpts = [
  "instagram",
  "facebook",
  "linkedin",
  "youtube",
  "mail",
  "tiktok",
] as const;
type typeOptions = (typeof typeOpts)[number];

type Contact = {
  type: typeOptions;
  href: string;
  title?: string;
  description?: string;
};

type ContactPack = Record<string, Contact>;

const matchIcon: Record<string, () => JSX.Element> = {
  tiktok: TikTokLogo,
  instagram: InstagramLogo,
  facebook: FacebookLogo,
  linkedin: LinkedinLogo,
  youtube: YoutubeLogo,
  mail: MailLogo,
};

export { type Contact, type ContactPack, matchIcon };
