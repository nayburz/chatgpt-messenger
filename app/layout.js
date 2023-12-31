import "./globals.css";

import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";

import SideBar from "@/components/SideBar";
import Provider from "@/components/Provider";
import Login from "@/components/Login";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({ children }) {
  const session = await getServerSession(authOptions);
  console.log(session);

  return (
    <html lang="en">
      <body>
        <Provider session={session}>
          {!session ? (
            <Login />
          ) : (
            <div className="flex">
              <div className="bg-[#202123] max-w-xs h-screen overflow-y-auto md:min-w-[20rem]">
                <SideBar />
              </div>
              <div className="bg-[#343541] flex-1">{children}</div>
            </div>
          )}
        </Provider>
      </body>
    </html>
  );
}
