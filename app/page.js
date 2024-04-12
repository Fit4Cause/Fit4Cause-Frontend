import { Button } from "@/components/ui/button";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import OrgNavigation from "@/components/OrgNavigation";
import OrgCards from "@/components/OrgCards";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { LoginForm } from "@/components/LoginForm";
import Image from "next/image";
export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        {/* <Button>hello</Button> */}
        <div className="pt-20 pb-6  flex flex-col items-start max-w-5xl">
          <div className="w-full flex justify-between ">
            <div className="grow max-w-xl">
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Let's Support Local{" "}
                <span className="text-green-600">NGO's</span>.
              </h1>
              <p className="mt-6 text-lg max-w-prose text-muted-foreground">
                Every NGO on our platform is verified by our team to ensure your
                money goes to people who are actually in need.
              </p>
              <Dialog>
                <DialogTrigger>
                  <Button className="mt-6 flex gap-3 text-md bg-black py-6">
                    <span>Get Started </span>
                    <span> &rarr;</span>
                  </Button>
                </DialogTrigger>
                <DialogContent className="bg-muted p-8">
                  <LoginForm />
                </DialogContent>
              </Dialog>
            </div>
            <div>
              <Image
                src="/homepageVector.svg"
                alt="Picture of the author"
                width={300}
                height={300}
              />
            </div>
          </div>
          <p className="mt-12 text-md font-bold tracking-tight text-gray-900 sm:text-2xl">
            Organizations
          </p>
          <div className="mt-5">
            <OrgNavigation />
          </div>
        </div>
        <div className="">
          <OrgCards />
        </div>
      </MaxWidthWrapper>
    </>
  );
}
