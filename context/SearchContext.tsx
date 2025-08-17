"use client";

import { createContext, useContext, useState } from "react";

type SearchContextType = {
  showSearchPanel: boolean;
  setShowSearchPanel: (q: boolean) => void;
  query: string;
  setQuery: (q: string) => void;
  chain: string;
  setChain: (c: string) => void;
};

const SearchContext = createContext<SearchContextType | null>(null);

export function SearchProvider({ children }: { children: React.ReactNode }) {
  const [showSearchPanel, setShowSearchPanel] = useState(false);
  const [query, setQuery] = useState("");
  const [chain, setChain] = useState("all");

  return (
    <SearchContext.Provider
      value={{
        query,
        setQuery,
        chain,
        setChain,
        showSearchPanel,
        setShowSearchPanel,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  const ctx = useContext(SearchContext);
  if (!ctx) throw new Error("useSearch must be used within SearchProvider");
  return ctx;
}
