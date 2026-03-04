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
      <NavigationMenuList className="w-screen bg-rr-dark-blue">
        {navbarItems.map((item) => (
          <NavigationMenuItem key={item} className="p-[1vh]">
            <Button
              variant={"ghost"}
              className="hover:bg-rr-accent-blue"
              onClick={() => onItemClick?.(item)}>
              {item}
            </Button>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
