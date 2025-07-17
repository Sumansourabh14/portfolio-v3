import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { socialMediaItems } from "@/data/socialMediaItems";

export default function SocialLinks() {
  return (
    <div className="flex gap-4 flex-wrap mt-6">
      {socialMediaItems.map((item) => (
        <Link
          key={item.id}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            variant="outline"
            className="flex items-center gap-2 cursor-pointer"
          >
            <FontAwesomeIcon icon={item.icon} className="h-4 w-4" />
          </Button>
        </Link>
      ))}
    </div>
  );
}
