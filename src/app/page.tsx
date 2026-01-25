import { NavBar } from "@/src/ui/home/nav-bar/nav-bar";

export default function Main() {
	return (
		<div>
			<NavBar />
			<div className="bg-background min-h-screen w-full z-10">Hello word</div>
		</div>
	);
}
