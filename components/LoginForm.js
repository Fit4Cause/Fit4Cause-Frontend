"use client";
import { useState, useContext } from "react";
import Link from "next/link";
import AuthContext from "../context/AuthContext";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     await login(username, password); // Call login function with credentials
  //     // Redirect to desired page after successful login (optional)
  //   } catch (error) {
  //     console.error("Login error:", error);
  //     // Handle login errors (e.g., display error message)
  //   }
  // };
  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              type="text"
              placeholder="google4planet"
              required
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>
            </div>
            <Input
              id="password"
              type="password"
              placeholder="*******"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Button type="submit" className="w-full">
            Login
          </Button>
          <Button variant="outline" className="w-full">
            Login with Google
          </Button>
        </div>
        <div className="mt-4 text-center text-sm">
          Interested in CSR Partnership?{" "}
          <Link href="#" className="underline">
            Contact us
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
