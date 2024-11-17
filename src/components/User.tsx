"use client";
import { useUser } from "@clerk/nextjs";

export default function UserDetails() {
  const { user, isLoaded } = useUser();
  return (
    <div className="">
      <h1 className={"p-1 text-3xl"}>
        Welcome
        {user && isLoaded ? (
          <span className="mx-2 text-3xl">{user.username}</span>
        ) : (
          <span className="mx-2 text-3xl">Guest</span>
        )}
      </h1>
    </div>
  );
}
