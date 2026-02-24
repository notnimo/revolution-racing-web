import { Instagram } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Youtube } from "lucide-react";
import { Mail } from "lucide-react";
import { Facebook } from "lucide-react";

function TikTokLogo() {
  return (
    <>
      <img src="/tiktok.svg" alt="tiktok-logo" />
    </>
  );
}

function InstagramLogo() {
  return (
    <>
      <Instagram />
    </>
  );
}

function FacebookLogo() {
  return (
    <>
      <Facebook />
    </>
  );
}

function LinkedinLogo() {
  return (
    <>
      <Linkedin />
    </>
  );
}

function YoutubeLogo() {
  return (
    <>
      <Youtube />
    </>
  );
}

function MailLogo() {
  return (
    <>
      <Mail />
    </>
  );
}

export {
  InstagramLogo,
  FacebookLogo,
  LinkedinLogo,
  YoutubeLogo,
  MailLogo,
  TikTokLogo,
};
