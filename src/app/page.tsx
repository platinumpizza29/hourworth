"use client";
import { useUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import NavComp from "~/components/nav";

export default function HomePage() {
  const { user, isLoaded } = useUser();
  if (user && isLoaded){
    redirect("/home");
  }
  return (
    <main className="">
      <NavComp />
      <h1>This is a landing page</h1>
    </main>
  );
}
