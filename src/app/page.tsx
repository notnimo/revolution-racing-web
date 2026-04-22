"use client";

import { useRef } from "react";

import { NavBar } from "@/src/ui/home/nav-bar/nav-bar";
import { useFadeInOnScroll } from "@/src/hooks/useFadeInOnScroll";
import { HeroSection } from "@/src/ui/home/hero-section";
import { AboutSnapshot } from "@/src/ui/home/about-snapshot";
import { NewsSnapshot } from "@/src/ui/home/news-snapshot";
import { StatsSection } from "@/src/ui/home/stats-section";
import { Contacts } from "@/src/ui/contacts/contacts";

import { contactsSq } from "@/src/lib/contacts";

export default function Main() {
	const navbarItems = ["Home", "About", "News", "Stats", "Contact"];

	const heroRef = useRef<HTMLDivElement>(null);
	const aboutRef = useRef<HTMLDivElement>(null);
	const newsRef = useRef<HTMLDivElement>(null);
	const statsRef = useRef<HTMLDivElement>(null);
	const contactRef = useRef<HTMLDivElement>(null);

	useFadeInOnScroll();

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

	return (
		<div className="w-screen flex flex-col justify-start items-center overflow-x-hidden">
			<div
				className="fixed top-0 left-0 right-0 z-50 w-screen bg-white/40 backdrop-blur-md"
				id="nav-bar-container">
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
				<Contacts contacts={contactsSq} />
			</div>
		</div>
	);
}
