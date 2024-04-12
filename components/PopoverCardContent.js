import { Button } from "@/components/ui/button";
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from "@/components/ui/select";
import Link from "next/link";
import {
  CardTitle,
  CardHeader,
  CardDescription,
  CardContent,
  Card,
} from "@/components/ui/card";

export default function PopoverCardContent() {
  return (
    <div className="bg-white text-gray-900">
      <div className="container mx-auto  py-8 px-16">
        <div className="flex justify-between items-center pb-32">
          <div className="flex flex-col items-start space-x-2 gap-4">
            <BracesIcon className="h-8 w-8 text-black" />
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-semibold">solidityonsolana.one</h1>
              <ExternalLinkIcon className="h-4 w-4 text-gray-500" />
            </div>
          </div>
          <div className="flex space-x-4">
            <Button className="bg-black text-white">
              {" "}
              <span className="text-xl mr-2">₹</span> Tip Project
            </Button>
            {/* <Select>
              <SelectTrigger id="round">
                <SelectValue placeholder="Select Round" />
              </SelectTrigger>
              <SelectContent position="popper">
                <SelectItem value="round1">Round 1</SelectItem>
                <SelectItem value="round2">Round 2</SelectItem>
                <SelectItem value="round3">Round 3</SelectItem>
              </SelectContent>
            </Select> */}
          </div>
        </div>
        <nav className="flex space-x-12 border-b-2 border-gray-200  tracking-wide">
          <Link
            className="text-black font-semibold border-b-2 border-black pb-3"
            href="#"
          >
            About
          </Link>
          <Link className="text-gray-500 hover:text-black" href="#">
            Contributors
          </Link>
          <Link className="text-gray-500 hover:text-black" href="#">
            Team
          </Link>
        </nav>
        <div className="w-full bg-muted">
          <div className="flex flex-col md:flex-row md:space-x-4 py-6 px-2 ">
            <div className="flex-1">
              <div className="space-y-4">
                <div className="bg-gray-100 p-6 rounded-md">
                  <h2 className="text-xl font-bold mb-2">
                    Building On Solana: A Deep Dive
                  </h2>
                  <p className="text-gray-600">
                    Dive into the world of blockchain development with our
                    Solidity on Solana course. Master the art of creating smart
                    contracts on the Solana network using Solidity. Join us on
                    the journey to high-speed, secure, and scalable
                    decentralized applications, opening the door to lifelong
                    learning that empowers you to shape the future of blockchain
                    technology.
                  </p>
                  <Button className="mt-4 bg-black text-white">
                    Start Course
                  </Button>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <Card className="bg-white">
                    <CardHeader>
                      <CardTitle>Mint spl Tokens</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>
                        In this module, we will develop a Solana program that
                        will mint fungible spl tokens. The program should be
                        able to set up and execute the token-minting process.
                      </CardDescription>
                    </CardContent>
                  </Card>
                  <Card className="bg-white">
                    <CardHeader>
                      <CardTitle>Transfer spl Tokens</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>
                        In this module, we'll allow for the transfer of spl
                        tokens that minted in Solana to other accounts.
                      </CardDescription>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
            <div className="md:w-1/3 mt-8 md:mt-0">
              <h3 className="text-lg font-semibold mb-2">
                About solidityonsolana.one
              </h3>
              <p className="text-gray-600">
                Know Ethereum (EVM) but want to build D-apps on Solana? This
                project helps! We'll show you how to use your existing knowledge
                to get started on Solana fast. Learn with:
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BracesIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1" />
      <path d="M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1" />
    </svg>
  );
}

function ExternalLinkIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" x2="21" y1="14" y2="3" />
    </svg>
  );
}
