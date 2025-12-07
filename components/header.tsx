import Link from "next/link";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

export function Header() {
  return (
    <header className="absolute top-0 z-50 w-full">
      <div className="container mx-auto flex h-20 items-center justify-between px-6 mt-5">
        <div className="flex items-center gap-3">
          <div className="relative h-22 w-22 rounded-full overflow-hidden">
            <Image
              src="/pro-ALg7Xr2S-1-e1726012538431.png"
              alt="ETA Skåne Logo"
              fill
              className="object-cover"
            />
          </div>
          <h1 className="text-xl font-semibold text-white">
            Elite Train Associates Skåne AB
          </h1>
        </div>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  href="/"
                  className="text-white hover:text-black/80 px-4 py-2 text-sm font-medium transition-colors"
                >
                  Hem
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  href="/tjanster"
                  className="text-white hover:text-black/80 px-4 py-2 text-sm font-medium transition-colors"
                >
                  Tjänster
                  </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  href="/om"
                  className="text-white hover:text-black/80 px-4 py-2 text-sm font-medium transition-colors"
                >
                  Om ETA Skåne
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  href="/kontakt"
                  className="text-white hover:text-black/80 px-4 py-2 text-sm font-medium transition-colors"
                >
                  Kontakt
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
}
