import React from "react";
import TrendingHeader from "./TrendingHeader";
import { useTrending } from "@/context/nft/TrendingContext";
import TrendingSidebarFilters from "./TrendingSidebarFilters";
import TrendingList from "./TrendingList";

const Trending = () => {
  const { isSidebarOpen, setSidebarOpen, layout, setLayout } = useTrending();

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
