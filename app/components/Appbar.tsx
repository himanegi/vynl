"use client";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Appbar() {
  const session = useSession();

  return (
    <div className="flex justify-between">
      <div>Vynl</div>
      <div>
        {session.data?.user && (
          <button className="m-2 p-2 bg-blue-200" onClick={() => signOut()}>
            Logout
          </button>
        )}
        {!session.data?.user && (
          <button className="m-2 p-2 bg-blue-200" onClick={() => signIn()}>
            Sign In
          </button>
        )}
      </div>
    </div>
  );
}
