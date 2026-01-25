import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from "@/src/components/navigation-menu";
import { Button } from "@/src/components/button";

export function NavBar() {
	const navbarItems = ["Home", "About", "Projects", "Team", "Contact"];

	return (
		<NavigationMenu className="sticky top-0 z-50">
			<NavigationMenuList className="min-w-screen bg-rr-dark-blue">
				{navbarItems.map((item) => (
					<NavigationMenuItem key={item} className="p-[1vh]">
						<Button variant={"ghost"} className="hover:bg-rr-accent-blue">
							{item}
						</Button>
					</NavigationMenuItem>
				))}
			</NavigationMenuList>
		</NavigationMenu>
	);
}
