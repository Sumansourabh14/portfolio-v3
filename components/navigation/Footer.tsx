import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../ui/navigation-menu";
import { Separator } from "../ui/separator";
import { menuOptions, RESUME_LINK, SITE_METADATA } from "@/data/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "../ui/button";
import { socialMediaItems } from "@/data/socialMediaItems";

const Footer = () => {
  return (
    <footer className="border-t py-6 max-w-[1400px] mx-auto px-4">
      <NavigationMenu className="flex flex-col md:flex-row gap-[24px] flex-wrap items-center justify-between px-4 max-w-[1400px] mx-auto">
        <section className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {SITE_METADATA.title}. All rights
          reserved.
        </section>

        <NavigationMenuList className="flex flex-wrap gap-4">
          {menuOptions.map((item, index) => (
            <NavigationMenuItem key={index}>
              <NavigationMenuLink asChild>
                <Link href={item.destination}>{item.title}</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
          {/* Resume Button */}
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link
                href={RESUME_LINK}
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

      <section className="text-center mt-20">
        <p className="tracking-tighter text-5xl sm:text-7xl md:text-8xl lg:text-[9rem] xl:text-[11rem] 2xl:text-[14rem]">
          Suman<span className="underline">Sourabh</span>
        </p>
      </section>

      <div className="mt-10 flex justify-center gap-4 flex-wrap">
        {socialMediaItems.map((item) => (
          <Link
            key={item.id}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="ghost"
              className="text-muted-foreground hover:text-foreground cursor-pointer"
              size="icon"
              aria-label={item.name}
            >
              <FontAwesomeIcon icon={item.icon} className="h-5 w-5" />
            </Button>
          </Link>
        ))}
      </div>

      <Separator className="mt-6" />
    </footer>
  );
};

export default Footer;
