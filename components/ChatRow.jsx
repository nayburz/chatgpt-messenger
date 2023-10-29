import { ChatBubbleLeftIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ChatRow = ({ id }) => {
  return (
    <div>
      <Link href={`/chat/${id}`}>
        <ChatBubbleLeftIcon className="w-5 h-5 text-white" />
      </Link>
    </div>
  );
};

export default ChatRow;
