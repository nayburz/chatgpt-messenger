"use client";

import { useSession, signOut } from "next-auth/react";
import NewChat from "./NewChat";

function SideBar() {
  const { data: session } = useSession();
  return (
    <div className="flex flex-col h-screen p-2">
      <div className="flex-1">
        <div>
          {/* A new chat */}
          <NewChat />
          <div>{/* Model slection */}</div>

          {/* Map through the chat rows */}
        </div>
      </div>

      {session && (
        <img
          onClick={() => signOut()}
          src={session.user?.image}
          alt=""
          className="w-12 h-12 mx-auto mb-2 rounded-full cursor-pointer hover:opacity-50"
        />
      )}
    </div>
  );
}

export default SideBar;
