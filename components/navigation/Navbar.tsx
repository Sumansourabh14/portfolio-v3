"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { menuOptions, RESUME_LINK, SITE_METADATA } from "@/data/constants";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../ui/navigation-menu";
import { Separator } from "../ui/separator";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="border-b">
      <div className="flex items-center justify-between max-w-[1400px] mx-auto px-6 py-4">
        <Link href="/" className="text-xl font-light">
          {SITE_METADATA.title}
        </Link>

        {/* Desktop Menu */}
        <NavigationMenu className="hidden md:flex gap-6">
          <NavigationMenuList className="flex gap-4">
            {menuOptions.map((item, index) => (
              <NavigationMenuItem key={index}>
                <NavigationMenuLink asChild>
                  <Link href={item.destination}>{item.title}</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium border-2"
                >
                  Resume
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Sheet Menu */}
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger className="p-2">
              <Menu className="h-6 w-6" />
            </SheetTrigger>
            <SheetContent side="right" className="w-[260px] px-5 py-6">
              <SheetHeader>
                <h2 className="text-xl font-semibold tracking-tight">
                  {SITE_METADATA.title}
                </h2>
              </SheetHeader>
              <nav className="flex flex-col gap-3 mt-6">
                {menuOptions.map((item, index) => (
                  <Link
                    key={index}
                    href={item.destination}
                    className="text-sm font-medium hover:underline"
                    onClick={() => setOpen(false)}
                  >
                    {item.title}
                  </Link>
                ))}
                <Link
                  href={RESUME_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium hover:underline"
                  onClick={() => setOpen(false)}
                >
                  Resume
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      <Separator />
    </nav>
  );
};

export default Navbar;
