import { cn } from "@/lib/utils";
import logo from "@/public/personCycling.png";
import Image from "next/image";
export default function IndividualOrgCard({
  name,
  description,
  className,
  photoLink,
}) {
  return (
    <div
      className={cn(
        className,
        "flex items-center gap-3 p-4 bg-white border rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300"
      )}
    >
      <img
        alt="Logo"
        className="h-16 w-16"
        src={photoLink}
        style={{
          aspectRatio: "50/50",
          objectFit: "cover",
        }}
        width="50"
      />
      <div className="flex flex-col items-start ml-4 cursor-pointer">
        <h5 className="text-lg font-semibold overflow-hidden overflow-ellipsis whitespace-nowrap max-w-md">
          {name}
        </h5>
        <p className="text-sm text-gray-600 overflow-hidden overflow-ellipsis whitespace-nowrap max-w-md">
          {description}
        </p>
      </div>
    </div>
  );
}
