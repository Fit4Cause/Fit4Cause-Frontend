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
  return (
    <div className="flex flex-col max-w-3xl gap-4 ">
      {listOfOrg.map((org, index) => {
        return (
          <Drawer>
            <DrawerTrigger>
              {" "}
              <IndividualOrgCard
                className="cursor-pointer"
                key={index}
                name={org.name}
                description={org.description}
              />
            </DrawerTrigger>
            <DrawerContent className="h-[91%]">
              <ScrollArea className="overflow-auto p-4">
                {/* Your content goes here */}
                <PopoverCardContent />
              </ScrollArea>
            </DrawerContent>
          </Drawer>
        );
      })}
    </div>
  );
};

export default OrgCards;
