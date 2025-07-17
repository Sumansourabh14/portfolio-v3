import Link from "next/link";
import { Button } from "../ui/button";
import SocialLinks from "./SocialLinks";
import { RESUME_LINK } from "@/data/constants";

const Hero = () => {
  return (
    <section className="py-20 2xl:py-40 px-8">
      <section className="flex flex-col items-center gap-4">
        <h1 className="font-bold text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight text-balance">
          SUMAN SOURABH
        </h1>
        <p className="text-muted-foreground text-xl mb-8">Frontend Developer</p>
        <section>
          <Button asChild className="py-6 px-8 sm:py-8 sm:px-12">
            <Link href={RESUME_LINK} className="text-lg sm:text-xl">
              Check out Resume
            </Link>
          </Button>
        </section>
        <SocialLinks />
      </section>
    </section>
  );
};

export default Hero;
