import { NavBar } from "@/src/ui/home/nav-bar/nav-bar";
import { HeroSection } from "@/src/ui/home/hero-section";
import { AboutSnapshot } from "@/src/ui/home/about-snapshot";
import { NewsSnapshot } from "@/src/ui/home/news-snapshot";
import { StatsSection } from "@/src/ui/home/stats-section";

export default function Main() {
	const navbarItems = ["Home", "About", "Projects", "Team", "Contact"];

	return (
		<div className="flex flex-col justify-start items-center">
			<div className="sticky top-0 z-50">
				<NavBar navbarItems={navbarItems} />
			</div>
			<HeroSection />
			<AboutSnapshot />
			<NewsSnapshot />
			<StatsSection />
		</div>
	);
}
