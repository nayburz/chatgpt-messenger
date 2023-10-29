"use client";

import { useSession, signOut } from "next-auth/react";
import { collection } from "firebase/firestore";
import NewChat from "./NewChat";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "@/firebase";
import ChatRow from "./ChatRow";

function SideBar() {
  const { data: session } = useSession();

  const [chats, loading, error] = useCollection(
    session && collection(db, "users", session?.user?.email, "chats")
  );

  console.log(chats);
  return (
    <div className="flex flex-col h-screen p-2">
      <div className="flex-1">
        <div>
          {/* A new chat */}
          <NewChat />
          <div>{/* Model slection */}</div>

          {/* Map through the chat rows */}
          {chats?.docs.map((chat) => (
            <ChatRow id={chat.id} key={chat.id} />
          ))}
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
