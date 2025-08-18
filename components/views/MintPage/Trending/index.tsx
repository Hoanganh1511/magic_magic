import React from "react";
import TrendingHeader from "./TrendingHeader";
import TrendingSidebarFilters from "./TrendingSidebarFilters";
import TrendingList from "./TrendingList";
import { useMint } from "@/context/nft/MintContext";

const Trending = () => {
  const { isSidebarOpen, setSidebarOpen, layout, setLayout } = useMint();

  return (
    <div className="w-full">
      <TrendingHeader />
      <div className="flex gap-x-5 overflow-hidden">
        <TrendingSidebarFilters open={isSidebarOpen} />
        <div className="flex-1 min-w-0">
          <TrendingList layout={layout} />
        </div>
      </div>
    </div>
  );
};

export default Trending;
