import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
} from "@/src/components/navigation-menu";
import { Button } from "@/src/components/button";

export function NavBar({
	navbarItems,
	onItemClick,
}: {
	navbarItems: string[];
	onItemClick?: (item: string) => void;
}) {
	return (
		<NavigationMenu className="w-screen">
			<NavigationMenuList className="w-screen bg-white/70 backdrop-blur-lg border-b border-blue-100 shadow-sm">
				{navbarItems.map((item) => (
					<NavigationMenuItem key={item} className="p-[1.5vw] md:p-3">
						<Button
							variant={"ghost"}
							className="text-[#2C3E50] font-semibold hover:text-white hover:bg-[#7EC8E3] transition-colors rounded-lg px-3 py-2"
							onClick={() => onItemClick?.(item)}>
							{item}
						</Button>
					</NavigationMenuItem>
				))}
			</NavigationMenuList>
		</NavigationMenu>
	);
}
