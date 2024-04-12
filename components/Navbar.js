import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "./ui/button";
const Navbar = () => {
  return (
    <div className="bg-white sticky z-50 top-0 inset-x-0 h-16">
      <header className="relative bg-white">
        <MaxWidthWrapper>
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              <Button className="mt-6 flex gap-3 text-md bg-black py-6">
                Login
              </Button>
            </div>
          </div>
        </MaxWidthWrapper>
      </header>
    </div>
  );
};

export default Navbar;
