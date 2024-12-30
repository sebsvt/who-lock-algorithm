"use client";

import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { ModeToggle } from "../mode-toggle";

interface NavigationProps {
  navItems?: Array<{ label: string; href: string }>;
}

export function Navigation({ navItems }: NavigationProps) {
  return (
    <header className="flex justify-between items-center h-16 px-4">
      <span className="font-semibold">⁁sebsvt</span>
      <nav className="flex justify-center flex-1">
        <NavigationMenu className="hidden md:block">
          <NavigationMenuList>
            {navItems?.map((item) => (
              <NavigationMenuItem key={item.href}>
                <NavigationMenuLink asChild>
                  <Link
                    href={item.href}
                    className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                  >
                    {item.label}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </nav>
      <div className="ml-auto flex items-center space-x-4">
        <ModeToggle />
      </div>
    </header>
  );
}
