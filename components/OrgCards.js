import IndividualOrgCard from "./IndividualOrgCard";
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
    <div className="flex flex-col max-w-3xl gap-4">
      {listOfOrg.map((org, index) => {
        return (
          <IndividualOrgCard
            key={index}
            name={org.name}
            description={org.description}
          />
        );
      })}
    </div>
  );
};

export default OrgCards;
