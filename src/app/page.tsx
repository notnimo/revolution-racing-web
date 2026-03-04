"use client";

import { useRef } from "react";

import { NavBar } from "@/src/ui/home/nav-bar/nav-bar";
import { HeroSection } from "@/src/ui/home/hero-section";
import { AboutSnapshot } from "@/src/ui/home/about-snapshot";
import { NewsSnapshot } from "@/src/ui/home/news-snapshot";
import { StatsSection } from "@/src/ui/home/stats-section";
import { Contacts } from "@/src/ui/contacts/contacts";

import { Contact, ContactPack } from "@/src/lib/contacts";

export default function Main() {
  const navbarItems = ["Home", "About", "News", "Stats", "Contact"];

  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const newsRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const sectionRefs: { [key: string]: React.RefObject<HTMLDivElement | null> } =
    {
      Home: heroRef,
      About: aboutRef,
      News: newsRef,
      Stats: statsRef,
      Contact: contactRef,
    };

  const handleNavClick = (item: string) => {
    const ref = sectionRefs[item];
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const instasq: Contact = {
    type: "instagram",
    href: "https://www.instagram.com/yourprofile",
    title: "Instagram",
    description:
      "Follow us on Instagram for updates and behind-the-scenes content.",
  };

  const contacts: ContactPack = { instasq };

  return (
    <div className="w-screen flex flex-col justify-start items-center">
      <div className="sticky top-0 z-50" id="nav-bar-container">
        <NavBar navbarItems={navbarItems} onItemClick={handleNavClick} />
      </div>
      <div ref={heroRef}>
        <HeroSection />
      </div>
      <div ref={aboutRef}>
        <AboutSnapshot />
      </div>
      <div ref={newsRef}>
        <NewsSnapshot />
      </div>
      <div ref={statsRef}>
        <StatsSection />
      </div>
      <div ref={contactRef}>
        <Contacts contacts={contacts} />
      </div>
    </div>
  );
}
