"use client";
import { useUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { LandingPage } from "~/components/landing-page";

export default function HomePage() {
  const { user, isLoaded } = useUser();
  if (user && isLoaded) {
    redirect("/home");
  }
  return (
    <main className="">
      <LandingPage />
    </main>
  );
}
