import logo from "@/public/personCycling.png";
import Image from "next/image";
export default function IndividualOrgCard({ name, description }) {
  return (
    <div className="flex items-center p-4 bg-white border rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300">
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
      <div className="ml-4">
        <h5 className="text-lg font-semibold">{name}</h5>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
}
