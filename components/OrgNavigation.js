"use client"
import { badgeVariants } from "@/components/ui/badge";
import Link from "next/link";
import { cn } from "@/lib/utils";

const listOfOrg = [
  {
    name: "All",
    fetchLink: "https://fit4cause-backend.onrender.com/api/ngo",
  },
  {
    name: "Enviornment",
    fetchLink: "https://fit4cause-backend.onrender.com/api/ngo/environment",
  },
  {
    name: "Social Cause",
    fetchLink: "https://fit4cause-backend.onrender.com/api/ngo/socialcause",
  },
  {
    name: "Human Rights",
    fetchLink: "https://fit4cause-backend.onrender.com/api/ngo/humanrights",
  },
  {
    name: "Health",
    fetchLink: "https://fit4cause-backend.onrender.com/api/ngo/health",
  },
  {
    name: "Education",
    fetchLink: "https://fit4cause-backend.onrender.com/api/ngo/education",
  },
];

export default function OrgNavigation() {
  const handleClick = (fetchLink) => {
    console.log(fetchLink);
  };
  return (
    <>
      <div>
        {listOfOrg.map((org, index) => {
          return (
            <Link
              key={org.name}
              href={"#"}
              onClick={() => handleClick(org.fetchLink)}
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
