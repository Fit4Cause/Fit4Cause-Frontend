import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import { LoginForm } from "./LoginForm";
const Navbar = () => {
  return (
    <div className="bg-white sticky z-50 top-0 inset-x-0 h-16">
      <header className="relative bg-white">
        <MaxWidthWrapper>
          <div className=" pb-4">
            <div className="flex h-16 items-end justify-between">
              <Image
                src="/logo.png"
                alt="Picture of the author"
                width={150}
                height={50}
              />
              <Dialog>
                <DialogTrigger>
                  <Button className="mt-6 flex gap-3 text-md bg-black py-6">
                    Login
                  </Button>
                </DialogTrigger>
                <DialogContent className="bg-muted p-8">
                  <LoginForm />
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </MaxWidthWrapper>
      </header>
    </div>
  );
};

export default Navbar;
