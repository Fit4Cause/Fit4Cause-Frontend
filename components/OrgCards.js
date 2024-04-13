"use client";
import { useEffect, useState } from "react";
import PopoverCardContent from "@/components/PopoverCardContent";
import IndividualOrgCard from "@/components/IndividualOrgCard";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { ScrollArea } from "@/components/ui/scroll-area";

import { Button } from "./ui/button";
const listOfOrg = [
  {
    name: "Blockride",
    description: "Democratizing access to vehicle financing for Africans",
  },
  {
    name: "Blockride",
    description: "Democratizing access to vehicle financing for Africans",
  },
  {
    name: "Blockride",
    description: "Democratizing access to vehicle financing for Africans",
  },
];

const OrgCards = () => {
  const [orgData, setOrgData] = useState(null);
  const dataFetch = async () => {
    const res = await fetch("https://fit4cause-backend.onrender.com/api/ngo");
    const data = await res.json();
    setOrgData(data.data);
  };
  useEffect(() => {
    dataFetch();
  }, []);
  return (
    <div className="flex flex-col max-w-3xl gap-4 ">
      {orgData &&
        orgData.map((org) => {
          return (
            <Drawer>
              <DrawerTrigger>
                {" "}
                <IndividualOrgCard
                  className="cursor-pointer"
                  key={org.Name}
                  name={org.Name}
                  description={org.About}
                  photoLink={org.image}
                />
              </DrawerTrigger>
              <DrawerContent className="h-[91%]">
                <ScrollArea className="overflow-auto p-4">
                  {/* Your content goes here */}
                  <PopoverCardContent orgId={org._id} />
                </ScrollArea>
              </DrawerContent>
            </Drawer>
          );
        })}
    </div>
  );
};

export default OrgCards;
