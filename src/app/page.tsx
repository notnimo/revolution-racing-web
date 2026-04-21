"use client";

import { useRef } from "react";

import { NavBar } from "@/src/ui/home/nav-bar/nav-bar";
import { useFadeInOnScroll } from "@/src/hooks/useFadeInOnScroll";
import { HeroSection } from "@/src/ui/home/hero-section";
import { AboutSnapshot } from "@/src/ui/home/about-snapshot";
import { NewsSnapshot } from "@/src/ui/home/news-snapshot";
import { StatsSection } from "@/src/ui/home/stats-section";
import { Contacts } from "@/src/ui/contacts/contacts";

import { Contact } from "@/src/lib/contacts";

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

	const instaSq: Contact = {
		id: 0,
		type: "instagram",
		href: "https://www.instagram.com/revolution.racing26?igsh=bHdvN3R4YjlsemNn",
		title: "Instagram",
		description: "Follow us on Instagram",
	};
	const tiktokSq: Contact = {
		id: 1,
		type: "tiktok",
		href: "https://www.tiktok.com/@revolution_racing26?_r=1&_t=ZN-95jVpiXcNs6",
		title: "TikTok",
		description: "Follow us on TikTok",
	};
	const linkedinSq: Contact = {
		id: 3,
		type: "linkedin",
		href: "https://www.linkedin.com/company/revolution-racingteam/posts/?feedView=all",
		title: "LinkedIn",
		description: "Follow us on LinkedIn",
	};
	const emailSq: Contact = {
		id: 5,
		type: "email",
		href: "mailto:revolution.rt@pascalgiaveno.it",
		title: "Email",
		description: "Contact us via email",
	};
	const contacts: Contact[] = [instaSq, tiktokSq, linkedinSq, emailSq];

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
				<Contacts contacts={contacts} />
			</div>
		</div>
	);
}
