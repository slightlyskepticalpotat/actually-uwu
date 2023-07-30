import React from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import Image from "next/image";
import { type StaticImport } from "next/dist/shared/lib/get-img-props";

export default function Profile() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  const username: string | StaticImport = "unknownuser" as string;
  // Example 1: Assign a default value if the value is null or undefined
  const userpic: string | StaticImport =
    user?.picture ??
    "https://media.discordapp.net/attachments/1132487584346554418/1135028271084482560/image.png?width=1122&height=1125";

  return (
    user && (
      <div>
        <Image src={userpic} alt={username} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    )
  );
}
