import { badgeVariants } from "@/components/ui/badge";
import Link from "next/link";
import { cn } from "@/lib/utils";

const listOfOrg = [
  {
    name: "Enviornment",
    href: "#",
  },
  {
    name: "Social Cause",
    href: "#",
  },
  {
    name: "Human Rights",
    href: "#",
  },
  {
    name: "Health",
    href: "#",
  },
  {
    name: "Education",
    href: "#",
  },
];

export default function OrgNavigation() {
  return (
    <>
      <div>
        {listOfOrg.map((org, index) => {
          return (
            <Link
              href={org.href}
              className={cn(
                badgeVariants({ variant: "outline" }),
                "px-4 py-2 bg-muted font-bold text-sm rounded-full mr-2 mb-2 hover:bg-green-500 hover:text-grey-600 transition-colors duration-300 ease-in-out"
              )}
            >
              {org.name}
            </Link>
          );
        })}
      </div>
    </>
  );
}
