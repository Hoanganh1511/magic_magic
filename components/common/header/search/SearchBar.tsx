"use client";
import { Input } from "@/components/ui/input";
import { useSearch } from "@/context/SearchContext";
import React, { useState } from "react";
import SearchPanel from "./SearchPanel";

const SearchBar = () => {
  const { showSearchPanel, setShowSearchPanel } = useSearch();
  return (
    <div className="w-full relative">
      <div className="w-full">
        <Input
          type="text"
          onClick={() => setShowSearchPanel(true)}
          onBlur={() => setShowSearchPanel(false)}
          placeholder="Search collections"
          className="border-primary-border bg-transparent hover:border-white/20 focus:border-white/40 outline-none focus:outline-none focus-visible:outline-none focus-visible:ring-0 duration-200"
        />
      </div>

      {showSearchPanel && (
        <div
          onMouseDown={(e) => e.preventDefault()} // ngăn mất focus khi click panel
        >
          <SearchPanel />
        </div>
      )}
    </div>
  );
};

export default SearchBar;
