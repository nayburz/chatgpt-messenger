import NewChat from "./NewChat";

function SideBar() {
  return (
    <div className="flex-col h-screen p-2">
      <div className="flex-1">
        <div>
          {/* A new chat */}
          <NewChat />
          <div>{/* Model slection */}</div>

          {/* Map through the chat rows */}
        </div>
      </div>
    </div>
  );
}

export default SideBar;
