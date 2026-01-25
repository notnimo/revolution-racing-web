import { NavBar } from "@/src/ui/home/nav-bar/nav-bar";

export default function Main() {
	const navbarItems = ["Home", "About", "Projects", "Team", "Contact"];

	return (
		<div className="flex flex-col justify-start">
			<div className="sticky top-0 z-50">
				<NavBar navbarItems={navbarItems} />
			</div>
			<div className="bg-background min-h-screen z-10">Hello word</div>
		</div>
	);
}
