import { cn } from "@/lib/utils";
import logo from "@/public/personCycling.png";
import Image from "next/image";
export default function IndividualOrgCard({ name, description, className }) {
  return (
    <div
      className={cn(
        className,
        "flex items-center gap-3 p-4 bg-white border rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300"
      )}
    >
      <Image
        alt="Logo"
        className="h-12 w-12"
        height="50"
        src={logo}
        style={{
          aspectRatio: "50/50",
          objectFit: "cover",
        }}
        width="50"
      />
      <div className="flex flex-col items-start ml-4 cursor-pointer">
        <h5 className="text-lg font-semibold">{name}</h5>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
}
