"use client";
import { ThemeProvider } from "next-themes";
import React from "react";
import { TooltipProvider } from "../ui/tooltip";
import { SearchProvider, useSearch } from "@/context/SearchContext";
import Header from "../common/header/Header";
import Footer from "../common/footer/Footer";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <TooltipProvider delayDuration={0}>
        <SearchProvider>
          <LayoutContent>{children}</LayoutContent>
        </SearchProvider>
      </TooltipProvider>
    </ThemeProvider>
  );
};
function LayoutContent({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative w-full h-[100vh] min-h-[calc(100vh-144px)] bg-primaryBg overflow-auto search-panel-scrollbar">
      <Header />
      <main className="relative">{children}</main>
      <Footer />
    </div>
  );
}

export default MainLayout;
