"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { navItems } from "@/data/nav";
import Link from "next/link";
import React from "react";
import SearchBar from "./search/SearchBar";
import { useSearch } from "@/context/SearchContext";
import Logo from "../Logo";

const Header = () => {
  const { showSearchPanel } = useSearch();
  return (
    <>
      <div className="sticky top-0 left-0 w-full z-[10]">
        <header className="z-[10] px-4 bg-white dark:bg-[#100c18] flex items-center gap-x-4 lg:gap-x-6 min-h-[64px] md:min-h-16 border-b border-primary-border ">
          <div className="flex-1 flex items-center gap-x-4 lg:gap-x-6">
            <div className="flex items-center">
              <Link href="/" className="flex items-center gap-x-2 mr-6">
                <Logo size={26} color="#ff007a" />
                <span className="font-semibold">Magic & Magic</span>
              </Link>
              <ul className="flex items-center gap-x-6">
                {navItems.map((nav, idx) => {
                  return (
                    <li key={idx} className={``}>
                      <Link
                        href={nav.href}
                        className="font-medium hover:opacity-80  whitespace-nowrap text-[17px] text-[#F2F2F3]"
                      >
                        {nav.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="flex-1">
              <SearchBar />
            </div>
          </div>
          <div className="flex items-center gap-x-2">
            <Button
              variant="outline"
              className="bg-[#1A1523] text-white hover:bg-[#2A2235] border-0"
            >
              Rewards
            </Button>

            {/* Nút Log In (hồng) */}
            <Button className="bg-[#EC1E79] px-10 text-white hover:bg-[#d4176d]">
              Log In
            </Button>
          </div>
        </header>
        <div className="relative z-[1] bg-white dark:bg-[#100c18] border-primary-border ">
          <div className="h-10 flex overflow-hidden relative"></div>
        </div>

        {/* Blur layer */}
        {showSearchPanel && (
          <div className="absolute top-[64px] left-0 right-0 h-[calc(100dvh)] bottom-0 z-[8] bg-black/10 backdrop-blur-md" />
        )}
      </div>
    </>
  );
};

export default Header;
