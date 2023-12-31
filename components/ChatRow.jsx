import { ChatBubbleLeftIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useCollection } from "react-firebase-hooks/firestore";
import { useRouter, usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { collection, deleteDoc, doc } from "firebase/firestore";
import { db } from "@/firebase";

const ChatRow = ({ id }) => {
  const pathname = usePathname();
  const router = useRouter();
  const { data: session } = useSession();
  const [active, setActive] = useState(false);

  const [messages] = useCollection(
    collection(db, "users", session?.user?.email, "chats", id, "messages")
  );

  useEffect(() => {
    if (!pathname) return;

    setActive(pathname.includes(id));
  }, [pathname]);

  const removeChat = async () => {
    await deleteDoc(doc(db, "users", session?.user?.email, "chats", id));
    router.replace(`/`);
    // use email! in typescript:
    // await deleteDoc(doc(db, "users", session?.user?.email!, "chats", id));
  };

  return (
    <div>
      <Link
        href={`/chat/${id}`}
        className={`chatRow justify-center ${active && "bg-gray-700/50"}`}
      >
        <p className="flex-1 hidden truncate md:inline-flex">
          {messages?.docs[messages?.docs.length - 1]?.data().text || "New Chat"}
        </p>
        <TrashIcon
          onClick={removeChat}
          className="w-5 h-5 text-gray-700 hover:text-red-700"
        />
        <ChatBubbleLeftIcon className="w-5 h-5 text-white" />
      </Link>
    </div>
  );
};

export default ChatRow;
