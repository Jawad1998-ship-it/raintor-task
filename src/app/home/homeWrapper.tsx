"use client";

import React from "react";
import Navbar from "@/app/(components)/Navbar/Navbar";
import { useTheme } from "next-themes";
import Hero from "../(components)/Hero/Hero";

const CustomerLayout = () => {
  const { theme } = useTheme();

  return (
    <main
      className={`bg-transparent min-h-screen ${theme} flex flex-col h-full w-full`}
      style={{ backgroundImage: "url('/images/bg.png')" }}
    >
      <Navbar />
      <Hero />
    </main>
  );
};

const CustomerWrapper = ({ children }: { children: React.ReactNode }) => {
  console.log(children);
  return (
    <div className="flex flex-col min-h-screen w-full bg-white min-w-[1440px]">
      <CustomerLayout />
      <div> {children}</div>
    </div>
  );
};

export default CustomerWrapper;
