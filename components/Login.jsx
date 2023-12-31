"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";

const Login = () => {
  return (
    <div className="bg-[#11A37F] h-screen flex flex-col items-center justify-center text-center">
      <Image src="/img/logo.png" width={300} height={300} alt="logo" />
      <button
        onClick={() => signIn("google")}
        className="text-3xl font-bold text-white animate-pulse"
      >
        Sign in to use ChatGPT
      </button>
    </div>
  );
};

export default Login;
