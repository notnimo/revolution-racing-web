import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
} from "@/src/components/navigation-menu";
import { Button } from "@/src/components/button";

export function NavBar({ navbarItems }: { navbarItems: string[] }) {
	return (
		<NavigationMenu>
			<NavigationMenuList className="w-screen bg-rr-dark-blue">
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
